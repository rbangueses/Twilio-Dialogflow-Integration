import { Skill } from "../WorkerSkills";
import { ThemeProps } from "../../theme";
import * as React from "react";
export interface WorkerSkillProps {
    skill: Skill;
    onUpdate: (skill: Skill) => void;
    onRemove: (skill: Skill) => void;
}
export declare class WorkerSkill extends React.PureComponent<WorkerSkillProps & ThemeProps> {
    render(): JSX.Element;
    private handleSkillChecked;
    private handleLevelChange;
    private handleRemoveClick;
}
