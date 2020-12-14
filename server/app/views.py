import cv2
import pytesseract
from aiohttp import web
from multidict import MultiDict
from jamdict import Jamdict

HEADERS = MultiDict(
    {'Access-Control-Allow-Origin': '*'}
)


async def area_text(request):
    breakpoint()

    data = await request.post()
    # print(f"POST DATA: {dict(data)}")
    # data = await request.json()
    print(f"POST DATA: {dict(data1)}")

    data = {
        "path": "test.jpg",
        "X": (483, 34),
        "Y": (541, 169)
        #"image_path": "images/manga/pic_1.png",
        # "top-left-dot": ("x", "y"),
        # "bottom-right-dot": ("x", "y")
    }

    # read image with cv2
    image = cv2.imread(data["path"])
    coord = (data["top-left-dot"], data["bottom-right-dot"])
    roi = image[coord[0][1]:coord[1][1], coord[0][0]:coord[1][0]]
    # gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    # export TESSDATA_PREFIX=/Users/faithsmetanova/Git/Learning/manga-ocr-api/tessdata
    text = pytesseract.image_to_string(roi, lang='jpn_vert')

    if text is None:
        return None
    else:
        # return web.json_response({"text": text})
        return web.json_response(
            data={"text": text},
            headers=HEADERS,
        )


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
