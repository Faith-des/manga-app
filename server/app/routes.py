from app.views import area_text, word_translate, tokenize_text


def setup_routes(app):
    app.router.add_post("/api/v1/area", area_text)
    app.router.add_post("/api/v1/word", word_translate)
    app.router.add_post("/api/v1/split_text", tokenize_text)

