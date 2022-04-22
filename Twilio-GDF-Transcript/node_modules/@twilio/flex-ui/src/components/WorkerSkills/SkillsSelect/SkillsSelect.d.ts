import * as React from "react";
import { SkillDefinition } from "../../../state";
interface SkillsSelectProps {
    selected?: number;
    values: Array<SkillDefinition & {
        disabled: boolean;
    }>;
    onChanged?: (value: SkillDefinition & {
        disabled: boolean;
    }) => void;
}
export declare class SkillsSelect extends React.PureComponent<SkillsSelectProps> {
    private handleChange;
    render(): JSX.Element;
}
export {};
