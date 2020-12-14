from app.views import area_text, word_translate


def setup_routes(app):
    app.router.add_post("/api/v1/area", area_text)
    app.router.add_post("/api/v1/word", word_translate)

