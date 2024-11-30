export enum SpiritType{
    LIGHT = "lumière",
    DARK = "Ténèbres",
    DRAGON = "Dragon",
    ICE = "Glace",
}

export interface ISpiritProperties{
    imageUrl: string;
    color: string;
}

export const SpiritTypeProperties: {[key: string]: ISpiritProperties} = {
	[SpiritType.LIGHT]: {
		imageUrl: '/light.png',
		color: '#f9e79f'
	},
	[SpiritType.DARK]: {
		imageUrl: '/dark.png',
		color: '#d2b4de'
	},
	[SpiritType.DRAGON]: {
		imageUrl: '/dragon.png',
		color: 'lightgreen'
	},
	[SpiritType.ICE]: {
		imageUrl: '/ice.png',
		color: 'lightblue'
	},
}
    
    
