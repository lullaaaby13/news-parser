import sequelize from "./infrastructure/sequelize/sequelize";
import DataSource from "./datasource/DataSource";
import ParserFactory from "./parser/ParserFactory";
import NewsRawHtml from "./infrastructure/sequelize/models/NewsRawHtml.model";


const KEY = process.env.KEY;
if (!!KEY) {
    // 에러
}


(async () => {
    try {
         await sequelize.sync({ force: false });

         const dataSource = new DataSource();
         const newsRawHtmls = await dataSource.getData();
         const parserFactory = new ParserFactory();

         // parserFactory.getBean(KEY);
         const parser = parserFactory.getBean('HANKYUNG_ECONOMIC');
         parser.parse(newsRawHtmls);

    } catch (e) {

    }
})();

