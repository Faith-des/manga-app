import logging
import time

from aiohttp import web
from app.routes import setup_routes

logger = logging.getLogger(__name__)


async def create_app():
    """Create Application."""
    app = web.Application()
    # app["config"] = config
    setup_routes(app)
    return app


def main():
    logger.info("Welcome to NPI RedisGraph!")
    #c = load_config_or_die("./config.yml")
    app = create_app()
    web.run_app(app, port=8081)


if __name__ == "__main__":
    main()