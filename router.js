import logger from "./logger.js"

export async function router(args) {
    const command = args[0] || "";
    logger.info("roteando aplicação");

    switch (command) {
        case "init":
            logger.success("iniciando o projeto");
            break;
        default:
            logger.error("comando não encontrado");
            break;
    }

}