import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
const summaryPreBuilt = Summary.winsAnalysisWithHtmlReport('Man United');
//const summary = new Summary(
//    new WinsAnalysis('Man United'),
//    new HtmlReport()
//);

matchReader.load();
summaryPreBuilt.buildAndPrintReport(matchReader.matches);