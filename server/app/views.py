import json

import cv2
import pytesseract
from aiohttp import web
from multidict import MultiDict
import requests
from jamdict import Jamdict

HEADERS = MultiDict(
    {'Access-Control-Allow-Origin': '*'}
)


async def area_text(request):

    #data = await request.post()
    data = await request.json()
    print(f"POST DATA: {dict(data)}")
    # {'dot1': [296, 99], 'dot2': [368, 191], 'path': '/static/media/img-1.6fd2fb05.jpg'}

    file_name = data["path"].split("/")[-1]
    server_img_path = "manga/" + ".".join([file_name.split(".")[0], file_name.split(".")[-1]])

    # data = {
    #     "path": "manga/test.jpg",
    #     "dot1": (483, 34),
    #     "dot2": (541, 169)
    # }

    # read image with cv2
    image = cv2.imread(server_img_path)
    coord = (data["dot1"], data["dot2"])
    roi = image[coord[0][1]:coord[1][1], coord[0][0]:coord[1][0]]
    # gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    # export TESSDATA_PREFIX=/Users/faithsmetanova/Git/Learning/manga-ocr-api/tessdata
    text = pytesseract.image_to_string(roi, lang='jpn_vert').replace("\n", "")

    if text is None:
        return None
    else:
        # return web.json_response({"text": text})
        return web.json_response(
            data={"text": text},
            headers=HEADERS,
        )


async def tokenize_text(request):
    data = await request.json()
    response = requests.post(
        # url='http://localhost:8000/api/tokenize',
        url='http://host.docker.internal:8000/api/tokenize',
        headers={"Content-Type": "application/json"},
        data=json.dumps({"tokenizer": "mecab", "text": data["text"]}),
    )
    return web.json_response(response.json()['tokens'][0])


async def word_translate(request):
    data = await request.post()

    fake_data = {
        "word": "自然",
    }

    jmd = Jamdict()
    result = jmd.lookup(fake_data["word"])

    # print all word entries
    #for entry in result.entries:
    #    print(entry)

    # tokenizer = WordTokenizer('Sentencepiece', model_path=MECAB_PATH)
    # print(tokenizer.tokenize(sentence))
    # # => [▁, 自然, 言語, 処理, を, 勉強, し, ています]
    #return web.json_response({"en_word": result.entries[0]})
    return web.json_response(
        data={"en_word": result.entries[0]},
        headers=HEADERS,
    )
