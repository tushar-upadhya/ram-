export interface Product {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface InfoItem {
  icon: string;
  text: string;
}

export interface SkillItem {
  name: string;
  des: string;
}

export interface SkillCategory {
  title: string;
  data: SkillItem[] | ToolItem[];
}

export interface ToolItem {
  imgPath: string;
}

export interface KrishnaName {
  name: string;
  des: string;
}
