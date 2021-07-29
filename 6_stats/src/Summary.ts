import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary { // This creates a pre-configured instance of summary! Increases coupling.
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        );
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

// Our summary doesnt have much behaviour to it! Instead, it has references
// to objects that define the low-level implementation for us!

//THIS is composition.