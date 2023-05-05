import { Model } from 'sequelize';

export class DiscordUser extends Model {
    public id!: number;
    public discordId!: string;
    public username!: string;
    public email!: string;
    public missingPokemon!: number[];
    public gameVersion!: string;
    public gameLanguage!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}