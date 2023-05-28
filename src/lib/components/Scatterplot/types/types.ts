export type xyScale = d3.ScaleLinear<number, number, never>;

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export interface Student {
	name: string;
	hours: number;
	grade: number;
}
