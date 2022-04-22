import * as React from "react";
import { Skill } from "../WorkerSkills";
import { ThemeProps } from "../../theme";
import { SkillDefinition } from "../../../state";
export interface AddSkillPanelProps extends ThemeProps {
    allSkillsDefinitions: Array<SkillDefinition>;
    selectedSkills?: {
        [name: string]: Skill;
    };
    onAdd: (skill: Skill) => void;
}
export interface AddSkillPanelState {
    current?: Skill;
}
export declare class AddSkillPanel extends React.PureComponent<AddSkillPanelProps, AddSkillPanelState> {
    state: AddSkillPanelState;
    render(): JSX.Element;
    private handleSkillSelected;
    private handleLevelChange;
    private handleAddClick;
}
