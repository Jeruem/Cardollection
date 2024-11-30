export enum SpiritType{
    LIGHT = "lumière",
    DARK = "Ténèbres",
    DRAGON = "Dragon",
    ICE = "Glace",
	FIRE="Feu",
	MENTAL="Mental",
	PLANT = "Plante",
	WATER="Eau",
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
		color: '#ab6753'
	},
	[SpiritType.ICE]: {
		imageUrl: '/ice.png',
		color: 'lightblue'
	},

	[SpiritType.FIRE]: {
		imageUrl: '/Fire.png',
		color: '#ea8061'
	},

	[SpiritType.MENTAL]: {
		imageUrl: '/mental.png',
		color: 'pink'
	},

	[SpiritType.PLANT]: {
		imageUrl: '/plant.png',
		color: '#85c35d '
	},

	[SpiritType.WATER]: {
		imageUrl: 'water.png',
		color: '#5d82df'
	},
}
    
    
