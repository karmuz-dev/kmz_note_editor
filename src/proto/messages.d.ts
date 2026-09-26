import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace game. */
export namespace game {

    /**
     * Properties of a Wrapper.
     * @deprecated Use game.Wrapper.$Properties instead.
     */
    interface IWrapper extends game.Wrapper.$Properties {
    }

    /** Represents a Wrapper. */
    class Wrapper {

        /**
         * Constructs a new Wrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.Wrapper.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Wrapper action. */
        action?: (game.PlayerAction.$Properties|null);

        /** Wrapper audio. */
        audio?: (game.AudioChunk.$Properties|null);

        /** Wrapper update. */
        update?: (game.StateUpdate.$Properties|null);

        /** Wrapper chat. */
        chat?: (game.ChatMessage.$Properties|null);

        /** Wrapper note. */
        note?: (game.NoteMessage.$Properties|null);

        /** Wrapper template. */
        template?: (game.TemplateMessage.$Properties|null);

        /** Wrapper roomSetting. */
        roomSetting?: (game.RoomSettingMessage.$Properties|null);

        /** Wrapper userList. */
        userList?: (game.UserListMessage.$Properties|null);

        /** Wrapper roulette. */
        roulette?: (game.RouletteMessage.$Properties|null);

        /** Wrapper dice. */
        dice?: (game.DiceMessage.$Properties|null);

        /** Wrapper vote. */
        vote?: (game.VoteMessage.$Properties|null);

        /** Wrapper roomItem. */
        roomItem?: (game.RoomItemMessage.$Properties|null);

        /** Wrapper token. */
        token?: (game.TokenMessage.$Properties|null);

        /** Wrapper chatReadSync. */
        chatReadSync?: (game.ChatReadSync.$Properties|null);

        /** Wrapper chatMarkRead. */
        chatMarkRead?: (game.ChatMarkRead.$Properties|null);

        /** Wrapper userInfo. */
        userInfo?: (game.UserInfoMessage.$Properties|null);

        /** Wrapper drawing. */
        drawing?: (game.DrawingMessage.$Properties|null);

        /** Wrapper playerStats. */
        playerStats?: (game.PlayerStatsMessage.$Properties|null);

        /** Wrapper content. */
        content?: ("action"|"audio"|"update"|"chat"|"note"|"template"|"roomSetting"|"userList"|"roulette"|"dice"|"vote"|"roomItem"|"token"|"chatReadSync"|"chatMarkRead"|"userInfo"|"drawing"|"playerStats");

        /**
         * Creates a new Wrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Wrapper instance
         */
        static create(properties: game.Wrapper.$Shape): game.Wrapper & game.Wrapper.$Shape;
        static create(properties?: game.Wrapper.$Properties): game.Wrapper;

        /**
         * Encodes the specified Wrapper message. Does not implicitly {@link game.Wrapper.verify|verify} messages.
         * @param message Wrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.Wrapper.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Wrapper message, length delimited. Does not implicitly {@link game.Wrapper.verify|verify} messages.
         * @param message Wrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.Wrapper.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Wrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.Wrapper & game.Wrapper.$Shape} Wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Wrapper & game.Wrapper.$Shape;

        /**
         * Decodes a Wrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.Wrapper & game.Wrapper.$Shape} Wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Wrapper & game.Wrapper.$Shape;

        /**
         * Verifies a Wrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Wrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Wrapper
         */
        static fromObject(object: { [k: string]: any }): game.Wrapper;

        /**
         * Creates a plain object from a Wrapper message. Also converts values to other types if specified.
         * @param message Wrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.Wrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Wrapper to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Wrapper
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Wrapper {

        /** Properties of a Wrapper. */
        interface $Properties {

            /** Wrapper action */
            action?: (game.PlayerAction.$Properties|null);

            /** Wrapper audio */
            audio?: (game.AudioChunk.$Properties|null);

            /** Wrapper update */
            update?: (game.StateUpdate.$Properties|null);

            /** Wrapper chat */
            chat?: (game.ChatMessage.$Properties|null);

            /** Wrapper note */
            note?: (game.NoteMessage.$Properties|null);

            /** Wrapper template */
            template?: (game.TemplateMessage.$Properties|null);

            /** Wrapper roomSetting */
            roomSetting?: (game.RoomSettingMessage.$Properties|null);

            /** Wrapper userList */
            userList?: (game.UserListMessage.$Properties|null);

            /** Wrapper roulette */
            roulette?: (game.RouletteMessage.$Properties|null);

            /** Wrapper dice */
            dice?: (game.DiceMessage.$Properties|null);

            /** Wrapper vote */
            vote?: (game.VoteMessage.$Properties|null);

            /** Wrapper roomItem */
            roomItem?: (game.RoomItemMessage.$Properties|null);

            /** Wrapper token */
            token?: (game.TokenMessage.$Properties|null);

            /** Wrapper chatReadSync */
            chatReadSync?: (game.ChatReadSync.$Properties|null);

            /** Wrapper chatMarkRead */
            chatMarkRead?: (game.ChatMarkRead.$Properties|null);

            /** Wrapper userInfo */
            userInfo?: (game.UserInfoMessage.$Properties|null);

            /** Wrapper drawing */
            drawing?: (game.DrawingMessage.$Properties|null);

            /** Wrapper playerStats */
            playerStats?: (game.PlayerStatsMessage.$Properties|null);

            /** Wrapper content */
            content?: ("action"|"audio"|"update"|"chat"|"note"|"template"|"roomSetting"|"userList"|"roulette"|"dice"|"vote"|"roomItem"|"token"|"chatReadSync"|"chatMarkRead"|"userInfo"|"drawing"|"playerStats");

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Wrapper. */
        type $Shape = {
  action?: game.PlayerAction.$Shape|null;
  audio?: game.AudioChunk.$Shape|null;
  update?: game.StateUpdate.$Shape|null;
  chat?: game.ChatMessage.$Shape|null;
  note?: game.NoteMessage.$Shape|null;
  template?: game.TemplateMessage.$Shape|null;
  roomSetting?: game.RoomSettingMessage.$Shape|null;
  userList?: game.UserListMessage.$Shape|null;
  roulette?: game.RouletteMessage.$Shape|null;
  dice?: game.DiceMessage.$Shape|null;
  vote?: game.VoteMessage.$Shape|null;
  roomItem?: game.RoomItemMessage.$Shape|null;
  token?: game.TokenMessage.$Shape|null;
  chatReadSync?: game.ChatReadSync.$Shape|null;
  chatMarkRead?: game.ChatMarkRead.$Shape|null;
  userInfo?: game.UserInfoMessage.$Shape|null;
  drawing?: game.DrawingMessage.$Shape|null;
  playerStats?: game.PlayerStatsMessage.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ content?: undefined; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "action"; action: game.PlayerAction.$Shape; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "audio"; action?: null; audio: game.AudioChunk.$Shape; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "update"; action?: null; audio?: null; update: game.StateUpdate.$Shape; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chat"; action?: null; audio?: null; update?: null; chat: game.ChatMessage.$Shape; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "note"; action?: null; audio?: null; update?: null; chat?: null; note: game.NoteMessage.$Shape; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "template"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template: game.TemplateMessage.$Shape; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roomSetting"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting: game.RoomSettingMessage.$Shape; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "userList"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList: game.UserListMessage.$Shape; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roulette"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette: game.RouletteMessage.$Shape; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "dice"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice: game.DiceMessage.$Shape; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "vote"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote: game.VoteMessage.$Shape; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roomItem"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem: game.RoomItemMessage.$Shape; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "token"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token: game.TokenMessage.$Shape; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chatReadSync"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync: game.ChatReadSync.$Shape; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chatMarkRead"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead: game.ChatMarkRead.$Shape; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "userInfo"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo: game.UserInfoMessage.$Shape; drawing?: null; playerStats?: null }|{ content?: "drawing"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing: game.DrawingMessage.$Shape; playerStats?: null }|{ content?: "playerStats"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats: game.PlayerStatsMessage.$Shape })
);
    }

    /**
     * Properties of a RoomItemData.
     * @deprecated Use game.RoomItemData.$Properties instead.
     */
    interface IRoomItemData extends game.RoomItemData.$Properties {
    }

    /** Represents a RoomItemData. */
    class RoomItemData {

        /**
         * Constructs a new RoomItemData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RoomItemData.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RoomItemData itemId. */
        itemId: string;

        /** RoomItemData itemKey. */
        itemKey: string;

        /** RoomItemData gridX. */
        gridX: number;

        /** RoomItemData gridY. */
        gridY: number;

        /** RoomItemData widthGrid. */
        widthGrid: number;

        /** RoomItemData heightGrid. */
        heightGrid: number;

        /** RoomItemData itemType. */
        itemType: string;

        /** RoomItemData tokenId. */
        tokenId: string;

        /** RoomItemData tokenName. */
        tokenName: string;

        /** RoomItemData baseHp. */
        baseHp: number;

        /** RoomItemData currentHp. */
        currentHp: number;

        /** RoomItemData imageUrl. */
        imageUrl: string;

        /** RoomItemData rotation. */
        rotation: number;

        /** RoomItemData targetRoomId. */
        targetRoomId: string;

        /** RoomItemData targetRoomName. */
        targetRoomName: string;

        /** RoomItemData hpVisibility. */
        hpVisibility: string;

        /** RoomItemData haveHp. */
        haveHp: boolean;

        /** RoomItemData sightRadius. */
        sightRadius: number;

        /** RoomItemData sightShape. */
        sightShape: string;

        /** RoomItemData sightLength. */
        sightLength: number;

        /** RoomItemData sightAngle. */
        sightAngle: number;

        /** RoomItemData sightShowToAll. */
        sightShowToAll: boolean;

        /** RoomItemData spawnTargetType. */
        spawnTargetType: string;

        /** RoomItemData spawnTargetUserId. */
        spawnTargetUserId: string;

        /** RoomItemData spawnTargetUserName. */
        spawnTargetUserName: string;

        /** RoomItemData tokenDescription. */
        tokenDescription: string;

        /** RoomItemData tokenInfo. */
        tokenInfo: string;

        /** RoomItemData tokenVisibility. */
        tokenVisibility: string;

        /**
         * Creates a new RoomItemData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomItemData instance
         */
        static create(properties: game.RoomItemData.$Shape): game.RoomItemData & game.RoomItemData.$Shape;
        static create(properties?: game.RoomItemData.$Properties): game.RoomItemData;

        /**
         * Encodes the specified RoomItemData message. Does not implicitly {@link game.RoomItemData.verify|verify} messages.
         * @param message RoomItemData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RoomItemData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomItemData message, length delimited. Does not implicitly {@link game.RoomItemData.verify|verify} messages.
         * @param message RoomItemData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RoomItemData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomItemData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RoomItemData & game.RoomItemData.$Shape} RoomItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RoomItemData & game.RoomItemData.$Shape;

        /**
         * Decodes a RoomItemData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RoomItemData & game.RoomItemData.$Shape} RoomItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RoomItemData & game.RoomItemData.$Shape;

        /**
         * Verifies a RoomItemData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomItemData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomItemData
         */
        static fromObject(object: { [k: string]: any }): game.RoomItemData;

        /**
         * Creates a plain object from a RoomItemData message. Also converts values to other types if specified.
         * @param message RoomItemData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RoomItemData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomItemData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RoomItemData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RoomItemData {

        /** Properties of a RoomItemData. */
        interface $Properties {

            /** RoomItemData itemId */
            itemId?: (string|null);

            /** RoomItemData itemKey */
            itemKey?: (string|null);

            /** RoomItemData gridX */
            gridX?: (number|null);

            /** RoomItemData gridY */
            gridY?: (number|null);

            /** RoomItemData widthGrid */
            widthGrid?: (number|null);

            /** RoomItemData heightGrid */
            heightGrid?: (number|null);

            /** RoomItemData itemType */
            itemType?: (string|null);

            /** RoomItemData tokenId */
            tokenId?: (string|null);

            /** RoomItemData tokenName */
            tokenName?: (string|null);

            /** RoomItemData baseHp */
            baseHp?: (number|null);

            /** RoomItemData currentHp */
            currentHp?: (number|null);

            /** RoomItemData imageUrl */
            imageUrl?: (string|null);

            /** RoomItemData rotation */
            rotation?: (number|null);

            /** RoomItemData targetRoomId */
            targetRoomId?: (string|null);

            /** RoomItemData targetRoomName */
            targetRoomName?: (string|null);

            /** RoomItemData hpVisibility */
            hpVisibility?: (string|null);

            /** RoomItemData haveHp */
            haveHp?: (boolean|null);

            /** RoomItemData sightRadius */
            sightRadius?: (number|null);

            /** RoomItemData sightShape */
            sightShape?: (string|null);

            /** RoomItemData sightLength */
            sightLength?: (number|null);

            /** RoomItemData sightAngle */
            sightAngle?: (number|null);

            /** RoomItemData sightShowToAll */
            sightShowToAll?: (boolean|null);

            /** RoomItemData spawnTargetType */
            spawnTargetType?: (string|null);

            /** RoomItemData spawnTargetUserId */
            spawnTargetUserId?: (string|null);

            /** RoomItemData spawnTargetUserName */
            spawnTargetUserName?: (string|null);

            /** RoomItemData tokenDescription */
            tokenDescription?: (string|null);

            /** RoomItemData tokenInfo */
            tokenInfo?: (string|null);

            /** RoomItemData tokenVisibility */
            tokenVisibility?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RoomItemData. */
        type $Shape = game.RoomItemData.$Properties;
    }

    /**
     * Properties of a RoomItemMessage.
     * @deprecated Use game.RoomItemMessage.$Properties instead.
     */
    interface IRoomItemMessage extends game.RoomItemMessage.$Properties {
    }

    /** Represents a RoomItemMessage. */
    class RoomItemMessage {

        /**
         * Constructs a new RoomItemMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RoomItemMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RoomItemMessage playerId. */
        playerId: string;

        /** RoomItemMessage type. */
        type: string;

        /** RoomItemMessage item. */
        item?: (game.RoomItemData.$Properties|null);

        /** RoomItemMessage items. */
        items: game.RoomItemData.$Properties[];

        /**
         * Creates a new RoomItemMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomItemMessage instance
         */
        static create(properties: game.RoomItemMessage.$Shape): game.RoomItemMessage & game.RoomItemMessage.$Shape;
        static create(properties?: game.RoomItemMessage.$Properties): game.RoomItemMessage;

        /**
         * Encodes the specified RoomItemMessage message. Does not implicitly {@link game.RoomItemMessage.verify|verify} messages.
         * @param message RoomItemMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RoomItemMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomItemMessage message, length delimited. Does not implicitly {@link game.RoomItemMessage.verify|verify} messages.
         * @param message RoomItemMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RoomItemMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomItemMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RoomItemMessage & game.RoomItemMessage.$Shape} RoomItemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RoomItemMessage & game.RoomItemMessage.$Shape;

        /**
         * Decodes a RoomItemMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RoomItemMessage & game.RoomItemMessage.$Shape} RoomItemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RoomItemMessage & game.RoomItemMessage.$Shape;

        /**
         * Verifies a RoomItemMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomItemMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomItemMessage
         */
        static fromObject(object: { [k: string]: any }): game.RoomItemMessage;

        /**
         * Creates a plain object from a RoomItemMessage message. Also converts values to other types if specified.
         * @param message RoomItemMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RoomItemMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomItemMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RoomItemMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RoomItemMessage {

        /** Properties of a RoomItemMessage. */
        interface $Properties {

            /** RoomItemMessage playerId */
            playerId?: (string|null);

            /** RoomItemMessage type */
            type?: (string|null);

            /** RoomItemMessage item */
            item?: (game.RoomItemData.$Properties|null);

            /** RoomItemMessage items */
            items?: (game.RoomItemData.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RoomItemMessage. */
        type $Shape = game.RoomItemMessage.$Properties;
    }

    /**
     * Properties of a TokenData.
     * @deprecated Use game.TokenData.$Properties instead.
     */
    interface ITokenData extends game.TokenData.$Properties {
    }

    /** Represents a TokenData. */
    class TokenData {

        /**
         * Constructs a new TokenData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.TokenData.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** TokenData tokenId. */
        tokenId: string;

        /** TokenData name. */
        name: string;

        /** TokenData baseHp. */
        baseHp: number;

        /** TokenData imageUrl. */
        imageUrl: string;

        /** TokenData size. */
        size: number;

        /** TokenData hpVisibility. */
        hpVisibility: string;

        /** TokenData haveHp. */
        haveHp: boolean;

        /** TokenData sightRadius. */
        sightRadius: number;

        /** TokenData sightShape. */
        sightShape: string;

        /** TokenData sightLength. */
        sightLength: number;

        /** TokenData sightAngle. */
        sightAngle: number;

        /** TokenData sightShowToAll. */
        sightShowToAll: boolean;

        /** TokenData sightDirection. */
        sightDirection: number;

        /** TokenData description. */
        description: string;

        /** TokenData info. */
        info: string;

        /** TokenData tokenVisibility. */
        tokenVisibility: string;

        /**
         * Creates a new TokenData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenData instance
         */
        static create(properties: game.TokenData.$Shape): game.TokenData & game.TokenData.$Shape;
        static create(properties?: game.TokenData.$Properties): game.TokenData;

        /**
         * Encodes the specified TokenData message. Does not implicitly {@link game.TokenData.verify|verify} messages.
         * @param message TokenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.TokenData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenData message, length delimited. Does not implicitly {@link game.TokenData.verify|verify} messages.
         * @param message TokenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.TokenData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.TokenData & game.TokenData.$Shape} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.TokenData & game.TokenData.$Shape;

        /**
         * Decodes a TokenData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.TokenData & game.TokenData.$Shape} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.TokenData & game.TokenData.$Shape;

        /**
         * Verifies a TokenData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenData
         */
        static fromObject(object: { [k: string]: any }): game.TokenData;

        /**
         * Creates a plain object from a TokenData message. Also converts values to other types if specified.
         * @param message TokenData
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.TokenData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenData to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TokenData
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TokenData {

        /** Properties of a TokenData. */
        interface $Properties {

            /** TokenData tokenId */
            tokenId?: (string|null);

            /** TokenData name */
            name?: (string|null);

            /** TokenData baseHp */
            baseHp?: (number|null);

            /** TokenData imageUrl */
            imageUrl?: (string|null);

            /** TokenData size */
            size?: (number|null);

            /** TokenData hpVisibility */
            hpVisibility?: (string|null);

            /** TokenData haveHp */
            haveHp?: (boolean|null);

            /** TokenData sightRadius */
            sightRadius?: (number|null);

            /** TokenData sightShape */
            sightShape?: (string|null);

            /** TokenData sightLength */
            sightLength?: (number|null);

            /** TokenData sightAngle */
            sightAngle?: (number|null);

            /** TokenData sightShowToAll */
            sightShowToAll?: (boolean|null);

            /** TokenData sightDirection */
            sightDirection?: (number|null);

            /** TokenData description */
            description?: (string|null);

            /** TokenData info */
            info?: (string|null);

            /** TokenData tokenVisibility */
            tokenVisibility?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TokenData. */
        type $Shape = game.TokenData.$Properties;
    }

    /**
     * Properties of a TokenMessage.
     * @deprecated Use game.TokenMessage.$Properties instead.
     */
    interface ITokenMessage extends game.TokenMessage.$Properties {
    }

    /** Represents a TokenMessage. */
    class TokenMessage {

        /**
         * Constructs a new TokenMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.TokenMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** TokenMessage playerId. */
        playerId: string;

        /** TokenMessage type. */
        type: string;

        /** TokenMessage tokenDef. */
        tokenDef?: (game.TokenData.$Properties|null);

        /** TokenMessage tokens. */
        tokens: game.TokenData.$Properties[];

        /** TokenMessage itemId. */
        itemId: string;

        /** TokenMessage currentHp. */
        currentHp: number;

        /** TokenMessage effectColor. */
        effectColor: number;

        /** TokenMessage effectDuration. */
        effectDuration: number;

        /** TokenMessage effectRadius. */
        effectRadius: number;

        /** TokenMessage x. */
        x: number;

        /** TokenMessage y. */
        y: number;

        /**
         * Creates a new TokenMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenMessage instance
         */
        static create(properties: game.TokenMessage.$Shape): game.TokenMessage & game.TokenMessage.$Shape;
        static create(properties?: game.TokenMessage.$Properties): game.TokenMessage;

        /**
         * Encodes the specified TokenMessage message. Does not implicitly {@link game.TokenMessage.verify|verify} messages.
         * @param message TokenMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.TokenMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenMessage message, length delimited. Does not implicitly {@link game.TokenMessage.verify|verify} messages.
         * @param message TokenMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.TokenMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.TokenMessage & game.TokenMessage.$Shape} TokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.TokenMessage & game.TokenMessage.$Shape;

        /**
         * Decodes a TokenMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.TokenMessage & game.TokenMessage.$Shape} TokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.TokenMessage & game.TokenMessage.$Shape;

        /**
         * Verifies a TokenMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenMessage
         */
        static fromObject(object: { [k: string]: any }): game.TokenMessage;

        /**
         * Creates a plain object from a TokenMessage message. Also converts values to other types if specified.
         * @param message TokenMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.TokenMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TokenMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TokenMessage {

        /** Properties of a TokenMessage. */
        interface $Properties {

            /** TokenMessage playerId */
            playerId?: (string|null);

            /** TokenMessage type */
            type?: (string|null);

            /** TokenMessage tokenDef */
            tokenDef?: (game.TokenData.$Properties|null);

            /** TokenMessage tokens */
            tokens?: (game.TokenData.$Properties[]|null);

            /** TokenMessage itemId */
            itemId?: (string|null);

            /** TokenMessage currentHp */
            currentHp?: (number|null);

            /** TokenMessage effectColor */
            effectColor?: (number|null);

            /** TokenMessage effectDuration */
            effectDuration?: (number|null);

            /** TokenMessage effectRadius */
            effectRadius?: (number|null);

            /** TokenMessage x */
            x?: (number|null);

            /** TokenMessage y */
            y?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TokenMessage. */
        type $Shape = game.TokenMessage.$Properties;
    }

    /**
     * Properties of a ChatMessage.
     * @deprecated Use game.ChatMessage.$Properties instead.
     */
    interface IChatMessage extends game.ChatMessage.$Properties {
    }

    /** Represents a ChatMessage. */
    class ChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ChatMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ChatMessage playerId. */
        playerId: string;

        /** ChatMessage playerName. */
        playerName: string;

        /** ChatMessage text. */
        text: string;

        /** ChatMessage targetPlayerId. */
        targetPlayerId: string;

        /** ChatMessage targetPlayerName. */
        targetPlayerName: string;

        /** ChatMessage messageId. */
        messageId: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        static create(properties: game.ChatMessage.$Shape): game.ChatMessage & game.ChatMessage.$Shape;
        static create(properties?: game.ChatMessage.$Properties): game.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link game.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ChatMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link game.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ChatMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ChatMessage & game.ChatMessage.$Shape} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ChatMessage & game.ChatMessage.$Shape;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ChatMessage & game.ChatMessage.$Shape} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ChatMessage & game.ChatMessage.$Shape;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        static fromObject(object: { [k: string]: any }): game.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatMessage {

        /** Properties of a ChatMessage. */
        interface $Properties {

            /** ChatMessage playerId */
            playerId?: (string|null);

            /** ChatMessage playerName */
            playerName?: (string|null);

            /** ChatMessage text */
            text?: (string|null);

            /** ChatMessage targetPlayerId */
            targetPlayerId?: (string|null);

            /** ChatMessage targetPlayerName */
            targetPlayerName?: (string|null);

            /** ChatMessage messageId */
            messageId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatMessage. */
        type $Shape = game.ChatMessage.$Properties;
    }

    /**
     * Properties of a ChatUnreadEntry.
     * @deprecated Use game.ChatUnreadEntry.$Properties instead.
     */
    interface IChatUnreadEntry extends game.ChatUnreadEntry.$Properties {
    }

    /** Represents a ChatUnreadEntry. */
    class ChatUnreadEntry {

        /**
         * Constructs a new ChatUnreadEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ChatUnreadEntry.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ChatUnreadEntry channel. */
        channel: string;

        /** ChatUnreadEntry count. */
        count: number;

        /**
         * Creates a new ChatUnreadEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatUnreadEntry instance
         */
        static create(properties: game.ChatUnreadEntry.$Shape): game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape;
        static create(properties?: game.ChatUnreadEntry.$Properties): game.ChatUnreadEntry;

        /**
         * Encodes the specified ChatUnreadEntry message. Does not implicitly {@link game.ChatUnreadEntry.verify|verify} messages.
         * @param message ChatUnreadEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ChatUnreadEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatUnreadEntry message, length delimited. Does not implicitly {@link game.ChatUnreadEntry.verify|verify} messages.
         * @param message ChatUnreadEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ChatUnreadEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatUnreadEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape} ChatUnreadEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape;

        /**
         * Decodes a ChatUnreadEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape} ChatUnreadEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape;

        /**
         * Verifies a ChatUnreadEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatUnreadEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatUnreadEntry
         */
        static fromObject(object: { [k: string]: any }): game.ChatUnreadEntry;

        /**
         * Creates a plain object from a ChatUnreadEntry message. Also converts values to other types if specified.
         * @param message ChatUnreadEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ChatUnreadEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatUnreadEntry to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatUnreadEntry
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatUnreadEntry {

        /** Properties of a ChatUnreadEntry. */
        interface $Properties {

            /** ChatUnreadEntry channel */
            channel?: (string|null);

            /** ChatUnreadEntry count */
            count?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatUnreadEntry. */
        type $Shape = game.ChatUnreadEntry.$Properties;
    }

    /**
     * Properties of a ChatReadSync.
     * @deprecated Use game.ChatReadSync.$Properties instead.
     */
    interface IChatReadSync extends game.ChatReadSync.$Properties {
    }

    /** Represents a ChatReadSync. */
    class ChatReadSync {

        /**
         * Constructs a new ChatReadSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ChatReadSync.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ChatReadSync unreads. */
        unreads: game.ChatUnreadEntry.$Properties[];

        /**
         * Creates a new ChatReadSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatReadSync instance
         */
        static create(properties: game.ChatReadSync.$Shape): game.ChatReadSync & game.ChatReadSync.$Shape;
        static create(properties?: game.ChatReadSync.$Properties): game.ChatReadSync;

        /**
         * Encodes the specified ChatReadSync message. Does not implicitly {@link game.ChatReadSync.verify|verify} messages.
         * @param message ChatReadSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ChatReadSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatReadSync message, length delimited. Does not implicitly {@link game.ChatReadSync.verify|verify} messages.
         * @param message ChatReadSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ChatReadSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatReadSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ChatReadSync & game.ChatReadSync.$Shape} ChatReadSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ChatReadSync & game.ChatReadSync.$Shape;

        /**
         * Decodes a ChatReadSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ChatReadSync & game.ChatReadSync.$Shape} ChatReadSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ChatReadSync & game.ChatReadSync.$Shape;

        /**
         * Verifies a ChatReadSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatReadSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatReadSync
         */
        static fromObject(object: { [k: string]: any }): game.ChatReadSync;

        /**
         * Creates a plain object from a ChatReadSync message. Also converts values to other types if specified.
         * @param message ChatReadSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ChatReadSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatReadSync to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatReadSync
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatReadSync {

        /** Properties of a ChatReadSync. */
        interface $Properties {

            /** ChatReadSync unreads */
            unreads?: (game.ChatUnreadEntry.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatReadSync. */
        type $Shape = game.ChatReadSync.$Properties;
    }

    /**
     * Properties of a ChatMarkRead.
     * @deprecated Use game.ChatMarkRead.$Properties instead.
     */
    interface IChatMarkRead extends game.ChatMarkRead.$Properties {
    }

    /** Represents a ChatMarkRead. */
    class ChatMarkRead {

        /**
         * Constructs a new ChatMarkRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ChatMarkRead.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ChatMarkRead channel. */
        channel: string;

        /** ChatMarkRead lastReadMessageId. */
        lastReadMessageId: string;

        /**
         * Creates a new ChatMarkRead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMarkRead instance
         */
        static create(properties: game.ChatMarkRead.$Shape): game.ChatMarkRead & game.ChatMarkRead.$Shape;
        static create(properties?: game.ChatMarkRead.$Properties): game.ChatMarkRead;

        /**
         * Encodes the specified ChatMarkRead message. Does not implicitly {@link game.ChatMarkRead.verify|verify} messages.
         * @param message ChatMarkRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.ChatMarkRead.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMarkRead message, length delimited. Does not implicitly {@link game.ChatMarkRead.verify|verify} messages.
         * @param message ChatMarkRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.ChatMarkRead.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMarkRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.ChatMarkRead & game.ChatMarkRead.$Shape} ChatMarkRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.ChatMarkRead & game.ChatMarkRead.$Shape;

        /**
         * Decodes a ChatMarkRead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.ChatMarkRead & game.ChatMarkRead.$Shape} ChatMarkRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.ChatMarkRead & game.ChatMarkRead.$Shape;

        /**
         * Verifies a ChatMarkRead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMarkRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMarkRead
         */
        static fromObject(object: { [k: string]: any }): game.ChatMarkRead;

        /**
         * Creates a plain object from a ChatMarkRead message. Also converts values to other types if specified.
         * @param message ChatMarkRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.ChatMarkRead, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMarkRead to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatMarkRead
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatMarkRead {

        /** Properties of a ChatMarkRead. */
        interface $Properties {

            /** ChatMarkRead channel */
            channel?: (string|null);

            /** ChatMarkRead lastReadMessageId */
            lastReadMessageId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatMarkRead. */
        type $Shape = game.ChatMarkRead.$Properties;
    }

    /**
     * Properties of a PlayerAction.
     * @deprecated Use game.PlayerAction.$Properties instead.
     */
    interface IPlayerAction extends game.PlayerAction.$Properties {
    }

    /** Represents a PlayerAction. */
    class PlayerAction {

        /**
         * Constructs a new PlayerAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerAction.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerAction playerId. */
        playerId: string;

        /** PlayerAction type. */
        type: string;

        /** PlayerAction x. */
        x: number;

        /** PlayerAction y. */
        y: number;

        /** PlayerAction anim. */
        anim: string;

        /** PlayerAction flipX. */
        flipX: boolean;

        /** PlayerAction name. */
        name: string;

        /** PlayerAction photoUrl. */
        photoUrl: string;

        /** PlayerAction description. */
        description: string;

        /**
         * Creates a new PlayerAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerAction instance
         */
        static create(properties: game.PlayerAction.$Shape): game.PlayerAction & game.PlayerAction.$Shape;
        static create(properties?: game.PlayerAction.$Properties): game.PlayerAction;

        /**
         * Encodes the specified PlayerAction message. Does not implicitly {@link game.PlayerAction.verify|verify} messages.
         * @param message PlayerAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerAction message, length delimited. Does not implicitly {@link game.PlayerAction.verify|verify} messages.
         * @param message PlayerAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerAction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerAction & game.PlayerAction.$Shape} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerAction & game.PlayerAction.$Shape;

        /**
         * Decodes a PlayerAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerAction & game.PlayerAction.$Shape} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerAction & game.PlayerAction.$Shape;

        /**
         * Verifies a PlayerAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerAction
         */
        static fromObject(object: { [k: string]: any }): game.PlayerAction;

        /**
         * Creates a plain object from a PlayerAction message. Also converts values to other types if specified.
         * @param message PlayerAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerAction to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerAction
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerAction {

        /** Properties of a PlayerAction. */
        interface $Properties {

            /** PlayerAction playerId */
            playerId?: (string|null);

            /** PlayerAction type */
            type?: (string|null);

            /** PlayerAction x */
            x?: (number|null);

            /** PlayerAction y */
            y?: (number|null);

            /** PlayerAction anim */
            anim?: (string|null);

            /** PlayerAction flipX */
            flipX?: (boolean|null);

            /** PlayerAction name */
            name?: (string|null);

            /** PlayerAction photoUrl */
            photoUrl?: (string|null);

            /** PlayerAction description */
            description?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerAction. */
        type $Shape = game.PlayerAction.$Properties;
    }

    /**
     * Properties of a UserInfoBar.
     * @deprecated Use game.UserInfoBar.$Properties instead.
     */
    interface IUserInfoBar extends game.UserInfoBar.$Properties {
    }

    /** Represents a UserInfoBar. */
    class UserInfoBar {

        /**
         * Constructs a new UserInfoBar.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UserInfoBar.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** UserInfoBar barId. */
        barId: string;

        /** UserInfoBar barName. */
        barName: string;

        /** UserInfoBar color. */
        color: string;

        /** UserInfoBar showTo. */
        showTo: string;

        /** UserInfoBar currentValue. */
        currentValue: number;

        /** UserInfoBar maxValue. */
        maxValue: number;

        /** UserInfoBar statKey. */
        statKey: string;

        /** UserInfoBar statRole. */
        statRole: string;

        /** UserInfoBar statKind. */
        statKind: string;

        /**
         * Creates a new UserInfoBar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoBar instance
         */
        static create(properties: game.UserInfoBar.$Shape): game.UserInfoBar & game.UserInfoBar.$Shape;
        static create(properties?: game.UserInfoBar.$Properties): game.UserInfoBar;

        /**
         * Encodes the specified UserInfoBar message. Does not implicitly {@link game.UserInfoBar.verify|verify} messages.
         * @param message UserInfoBar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UserInfoBar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoBar message, length delimited. Does not implicitly {@link game.UserInfoBar.verify|verify} messages.
         * @param message UserInfoBar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UserInfoBar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoBar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UserInfoBar & game.UserInfoBar.$Shape} UserInfoBar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserInfoBar & game.UserInfoBar.$Shape;

        /**
         * Decodes a UserInfoBar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UserInfoBar & game.UserInfoBar.$Shape} UserInfoBar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserInfoBar & game.UserInfoBar.$Shape;

        /**
         * Verifies a UserInfoBar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoBar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoBar
         */
        static fromObject(object: { [k: string]: any }): game.UserInfoBar;

        /**
         * Creates a plain object from a UserInfoBar message. Also converts values to other types if specified.
         * @param message UserInfoBar
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UserInfoBar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoBar to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserInfoBar
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserInfoBar {

        /** Properties of a UserInfoBar. */
        interface $Properties {

            /** UserInfoBar barId */
            barId?: (string|null);

            /** UserInfoBar barName */
            barName?: (string|null);

            /** UserInfoBar color */
            color?: (string|null);

            /** UserInfoBar showTo */
            showTo?: (string|null);

            /** UserInfoBar currentValue */
            currentValue?: (number|null);

            /** UserInfoBar maxValue */
            maxValue?: (number|null);

            /** UserInfoBar statKey */
            statKey?: (string|null);

            /** UserInfoBar statRole */
            statRole?: (string|null);

            /** UserInfoBar statKind */
            statKind?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserInfoBar. */
        type $Shape = game.UserInfoBar.$Properties;
    }

    /**
     * Properties of a UserInfoPayload.
     * @deprecated Use game.UserInfoPayload.$Properties instead.
     */
    interface IUserInfoPayload extends game.UserInfoPayload.$Properties {
    }

    /** Represents a UserInfoPayload. */
    class UserInfoPayload {

        /**
         * Constructs a new UserInfoPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UserInfoPayload.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** UserInfoPayload targetUserId. */
        targetUserId: string;

        /** UserInfoPayload scopeType. */
        scopeType: string;

        /** UserInfoPayload bars. */
        bars: game.UserInfoBar.$Properties[];

        /** UserInfoPayload canEditDescription. */
        canEditDescription: boolean;

        /** UserInfoPayload canEditBars. */
        canEditBars: boolean;

        /** UserInfoPayload infoText. */
        infoText: string;

        /**
         * Creates a new UserInfoPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoPayload instance
         */
        static create(properties: game.UserInfoPayload.$Shape): game.UserInfoPayload & game.UserInfoPayload.$Shape;
        static create(properties?: game.UserInfoPayload.$Properties): game.UserInfoPayload;

        /**
         * Encodes the specified UserInfoPayload message. Does not implicitly {@link game.UserInfoPayload.verify|verify} messages.
         * @param message UserInfoPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UserInfoPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoPayload message, length delimited. Does not implicitly {@link game.UserInfoPayload.verify|verify} messages.
         * @param message UserInfoPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UserInfoPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UserInfoPayload & game.UserInfoPayload.$Shape} UserInfoPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserInfoPayload & game.UserInfoPayload.$Shape;

        /**
         * Decodes a UserInfoPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UserInfoPayload & game.UserInfoPayload.$Shape} UserInfoPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserInfoPayload & game.UserInfoPayload.$Shape;

        /**
         * Verifies a UserInfoPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoPayload
         */
        static fromObject(object: { [k: string]: any }): game.UserInfoPayload;

        /**
         * Creates a plain object from a UserInfoPayload message. Also converts values to other types if specified.
         * @param message UserInfoPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UserInfoPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserInfoPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserInfoPayload {

        /** Properties of a UserInfoPayload. */
        interface $Properties {

            /** UserInfoPayload targetUserId */
            targetUserId?: (string|null);

            /** UserInfoPayload scopeType */
            scopeType?: (string|null);

            /** UserInfoPayload bars */
            bars?: (game.UserInfoBar.$Properties[]|null);

            /** UserInfoPayload canEditDescription */
            canEditDescription?: (boolean|null);

            /** UserInfoPayload canEditBars */
            canEditBars?: (boolean|null);

            /** UserInfoPayload infoText */
            infoText?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserInfoPayload. */
        type $Shape = game.UserInfoPayload.$Properties;
    }

    /**
     * Properties of a UserInfoMessage.
     * @deprecated Use game.UserInfoMessage.$Properties instead.
     */
    interface IUserInfoMessage extends game.UserInfoMessage.$Properties {
    }

    /** Represents a UserInfoMessage. */
    class UserInfoMessage {

        /**
         * Constructs a new UserInfoMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UserInfoMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** UserInfoMessage playerId. */
        playerId: string;

        /** UserInfoMessage type. */
        type: string;

        /** UserInfoMessage targetUserId. */
        targetUserId: string;

        /** UserInfoMessage bars. */
        bars: game.UserInfoBar.$Properties[];

        /** UserInfoMessage payload. */
        payload?: (game.UserInfoPayload.$Properties|null);

        /** UserInfoMessage infoText. */
        infoText: string;

        /**
         * Creates a new UserInfoMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoMessage instance
         */
        static create(properties: game.UserInfoMessage.$Shape): game.UserInfoMessage & game.UserInfoMessage.$Shape;
        static create(properties?: game.UserInfoMessage.$Properties): game.UserInfoMessage;

        /**
         * Encodes the specified UserInfoMessage message. Does not implicitly {@link game.UserInfoMessage.verify|verify} messages.
         * @param message UserInfoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UserInfoMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoMessage message, length delimited. Does not implicitly {@link game.UserInfoMessage.verify|verify} messages.
         * @param message UserInfoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UserInfoMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UserInfoMessage & game.UserInfoMessage.$Shape} UserInfoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserInfoMessage & game.UserInfoMessage.$Shape;

        /**
         * Decodes a UserInfoMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UserInfoMessage & game.UserInfoMessage.$Shape} UserInfoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserInfoMessage & game.UserInfoMessage.$Shape;

        /**
         * Verifies a UserInfoMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoMessage
         */
        static fromObject(object: { [k: string]: any }): game.UserInfoMessage;

        /**
         * Creates a plain object from a UserInfoMessage message. Also converts values to other types if specified.
         * @param message UserInfoMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UserInfoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserInfoMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserInfoMessage {

        /** Properties of a UserInfoMessage. */
        interface $Properties {

            /** UserInfoMessage playerId */
            playerId?: (string|null);

            /** UserInfoMessage type */
            type?: (string|null);

            /** UserInfoMessage targetUserId */
            targetUserId?: (string|null);

            /** UserInfoMessage bars */
            bars?: (game.UserInfoBar.$Properties[]|null);

            /** UserInfoMessage payload */
            payload?: (game.UserInfoPayload.$Properties|null);

            /** UserInfoMessage infoText */
            infoText?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserInfoMessage. */
        type $Shape = game.UserInfoMessage.$Properties;
    }

    /**
     * Properties of a PlayerStat.
     * @deprecated Use game.PlayerStat.$Properties instead.
     */
    interface IPlayerStat extends game.PlayerStat.$Properties {
    }

    /** Represents a PlayerStat. */
    class PlayerStat {

        /**
         * Constructs a new PlayerStat.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerStat.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerStat statId. */
        statId: string;

        /** PlayerStat userId. */
        userId: string;

        /** PlayerStat key. */
        key: string;

        /** PlayerStat label. */
        label: string;

        /** PlayerStat role. */
        role: string;

        /** PlayerStat kind. */
        kind: string;

        /** PlayerStat value. */
        value: number;

        /** PlayerStat maxValue. */
        maxValue: number;

        /** PlayerStat color. */
        color: string;

        /** PlayerStat showTo. */
        showTo: string;

        /** PlayerStat sourceNoteIds. */
        sourceNoteIds: string[];

        /** PlayerStat rollName. */
        rollName: string;

        /** PlayerStat rollKey. */
        rollKey: string;

        /** PlayerStat rollConfigId. */
        rollConfigId: string;

        /** PlayerStat rollModifierStatKey. */
        rollModifierStatKey: string;

        /** PlayerStat rollDiceStatKey. */
        rollDiceStatKey: string;

        /** PlayerStat rollDiceOperation. */
        rollDiceOperation: string;

        /** PlayerStat rollMode. */
        rollMode: string;

        /** PlayerStat rollTargetStatKey. */
        rollTargetStatKey: string;

        /** PlayerStat rollOwnerId. */
        rollOwnerId: string;

        /** PlayerStat isReversed. */
        isReversed: boolean;

        /** PlayerStat rollBaseDiceCount. */
        rollBaseDiceCount: number;

        /** PlayerStat rollResultMode. */
        rollResultMode: string;

        /** PlayerStat rollFormula. */
        rollFormula: string;

        /** PlayerStat createdAt. */
        createdAt: (number|Long);

        /** PlayerStat updatedAt. */
        updatedAt: (number|Long);

        /** PlayerStat rollVisibility. */
        rollVisibility: string;

        /**
         * Creates a new PlayerStat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerStat instance
         */
        static create(properties: game.PlayerStat.$Shape): game.PlayerStat & game.PlayerStat.$Shape;
        static create(properties?: game.PlayerStat.$Properties): game.PlayerStat;

        /**
         * Encodes the specified PlayerStat message. Does not implicitly {@link game.PlayerStat.verify|verify} messages.
         * @param message PlayerStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerStat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerStat message, length delimited. Does not implicitly {@link game.PlayerStat.verify|verify} messages.
         * @param message PlayerStat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerStat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerStat & game.PlayerStat.$Shape} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerStat & game.PlayerStat.$Shape;

        /**
         * Decodes a PlayerStat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerStat & game.PlayerStat.$Shape} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerStat & game.PlayerStat.$Shape;

        /**
         * Verifies a PlayerStat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerStat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerStat
         */
        static fromObject(object: { [k: string]: any }): game.PlayerStat;

        /**
         * Creates a plain object from a PlayerStat message. Also converts values to other types if specified.
         * @param message PlayerStat
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerStat to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerStat
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerStat {

        /** Properties of a PlayerStat. */
        interface $Properties {

            /** PlayerStat statId */
            statId?: (string|null);

            /** PlayerStat userId */
            userId?: (string|null);

            /** PlayerStat key */
            key?: (string|null);

            /** PlayerStat label */
            label?: (string|null);

            /** PlayerStat role */
            role?: (string|null);

            /** PlayerStat kind */
            kind?: (string|null);

            /** PlayerStat value */
            value?: (number|null);

            /** PlayerStat maxValue */
            maxValue?: (number|null);

            /** PlayerStat color */
            color?: (string|null);

            /** PlayerStat showTo */
            showTo?: (string|null);

            /** PlayerStat sourceNoteIds */
            sourceNoteIds?: (string[]|null);

            /** PlayerStat rollName */
            rollName?: (string|null);

            /** PlayerStat rollKey */
            rollKey?: (string|null);

            /** PlayerStat rollConfigId */
            rollConfigId?: (string|null);

            /** PlayerStat rollModifierStatKey */
            rollModifierStatKey?: (string|null);

            /** PlayerStat rollDiceStatKey */
            rollDiceStatKey?: (string|null);

            /** PlayerStat rollDiceOperation */
            rollDiceOperation?: (string|null);

            /** PlayerStat rollMode */
            rollMode?: (string|null);

            /** PlayerStat rollTargetStatKey */
            rollTargetStatKey?: (string|null);

            /** PlayerStat rollOwnerId */
            rollOwnerId?: (string|null);

            /** PlayerStat isReversed */
            isReversed?: (boolean|null);

            /** PlayerStat rollBaseDiceCount */
            rollBaseDiceCount?: (number|null);

            /** PlayerStat rollResultMode */
            rollResultMode?: (string|null);

            /** PlayerStat rollFormula */
            rollFormula?: (string|null);

            /** PlayerStat createdAt */
            createdAt?: (number|Long|null);

            /** PlayerStat updatedAt */
            updatedAt?: (number|Long|null);

            /** PlayerStat rollVisibility */
            rollVisibility?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerStat. */
        type $Shape = game.PlayerStat.$Properties;
    }

    /**
     * Properties of a PlayerStatsPayload.
     * @deprecated Use game.PlayerStatsPayload.$Properties instead.
     */
    interface IPlayerStatsPayload extends game.PlayerStatsPayload.$Properties {
    }

    /** Represents a PlayerStatsPayload. */
    class PlayerStatsPayload {

        /**
         * Constructs a new PlayerStatsPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerStatsPayload.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerStatsPayload targetUserId. */
        targetUserId: string;

        /** PlayerStatsPayload scopeType. */
        scopeType: string;

        /** PlayerStatsPayload stats. */
        stats: game.PlayerStat.$Properties[];

        /** PlayerStatsPayload canEditStats. */
        canEditStats: boolean;

        /**
         * Creates a new PlayerStatsPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerStatsPayload instance
         */
        static create(properties: game.PlayerStatsPayload.$Shape): game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape;
        static create(properties?: game.PlayerStatsPayload.$Properties): game.PlayerStatsPayload;

        /**
         * Encodes the specified PlayerStatsPayload message. Does not implicitly {@link game.PlayerStatsPayload.verify|verify} messages.
         * @param message PlayerStatsPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerStatsPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerStatsPayload message, length delimited. Does not implicitly {@link game.PlayerStatsPayload.verify|verify} messages.
         * @param message PlayerStatsPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerStatsPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStatsPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape} PlayerStatsPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape;

        /**
         * Decodes a PlayerStatsPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape} PlayerStatsPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape;

        /**
         * Verifies a PlayerStatsPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerStatsPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerStatsPayload
         */
        static fromObject(object: { [k: string]: any }): game.PlayerStatsPayload;

        /**
         * Creates a plain object from a PlayerStatsPayload message. Also converts values to other types if specified.
         * @param message PlayerStatsPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerStatsPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerStatsPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerStatsPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerStatsPayload {

        /** Properties of a PlayerStatsPayload. */
        interface $Properties {

            /** PlayerStatsPayload targetUserId */
            targetUserId?: (string|null);

            /** PlayerStatsPayload scopeType */
            scopeType?: (string|null);

            /** PlayerStatsPayload stats */
            stats?: (game.PlayerStat.$Properties[]|null);

            /** PlayerStatsPayload canEditStats */
            canEditStats?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerStatsPayload. */
        type $Shape = game.PlayerStatsPayload.$Properties;
    }

    /**
     * Properties of a PlayerStatsMessage.
     * @deprecated Use game.PlayerStatsMessage.$Properties instead.
     */
    interface IPlayerStatsMessage extends game.PlayerStatsMessage.$Properties {
    }

    /** Represents a PlayerStatsMessage. */
    class PlayerStatsMessage {

        /**
         * Constructs a new PlayerStatsMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerStatsMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerStatsMessage playerId. */
        playerId: string;

        /** PlayerStatsMessage type. */
        type: string;

        /** PlayerStatsMessage targetUserId. */
        targetUserId: string;

        /** PlayerStatsMessage stats. */
        stats: game.PlayerStat.$Properties[];

        /** PlayerStatsMessage payload. */
        payload?: (game.PlayerStatsPayload.$Properties|null);

        /**
         * Creates a new PlayerStatsMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerStatsMessage instance
         */
        static create(properties: game.PlayerStatsMessage.$Shape): game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape;
        static create(properties?: game.PlayerStatsMessage.$Properties): game.PlayerStatsMessage;

        /**
         * Encodes the specified PlayerStatsMessage message. Does not implicitly {@link game.PlayerStatsMessage.verify|verify} messages.
         * @param message PlayerStatsMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerStatsMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerStatsMessage message, length delimited. Does not implicitly {@link game.PlayerStatsMessage.verify|verify} messages.
         * @param message PlayerStatsMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerStatsMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStatsMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape} PlayerStatsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape;

        /**
         * Decodes a PlayerStatsMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape} PlayerStatsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape;

        /**
         * Verifies a PlayerStatsMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerStatsMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerStatsMessage
         */
        static fromObject(object: { [k: string]: any }): game.PlayerStatsMessage;

        /**
         * Creates a plain object from a PlayerStatsMessage message. Also converts values to other types if specified.
         * @param message PlayerStatsMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerStatsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerStatsMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerStatsMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerStatsMessage {

        /** Properties of a PlayerStatsMessage. */
        interface $Properties {

            /** PlayerStatsMessage playerId */
            playerId?: (string|null);

            /** PlayerStatsMessage type */
            type?: (string|null);

            /** PlayerStatsMessage targetUserId */
            targetUserId?: (string|null);

            /** PlayerStatsMessage stats */
            stats?: (game.PlayerStat.$Properties[]|null);

            /** PlayerStatsMessage payload */
            payload?: (game.PlayerStatsPayload.$Properties|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerStatsMessage. */
        type $Shape = game.PlayerStatsMessage.$Properties;
    }

    /**
     * Properties of a DrawingPoint.
     * @deprecated Use game.DrawingPoint.$Properties instead.
     */
    interface IDrawingPoint extends game.DrawingPoint.$Properties {
    }

    /** Represents a DrawingPoint. */
    class DrawingPoint {

        /**
         * Constructs a new DrawingPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DrawingPoint.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DrawingPoint x. */
        x: number;

        /** DrawingPoint y. */
        y: number;

        /**
         * Creates a new DrawingPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawingPoint instance
         */
        static create(properties: game.DrawingPoint.$Shape): game.DrawingPoint & game.DrawingPoint.$Shape;
        static create(properties?: game.DrawingPoint.$Properties): game.DrawingPoint;

        /**
         * Encodes the specified DrawingPoint message. Does not implicitly {@link game.DrawingPoint.verify|verify} messages.
         * @param message DrawingPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DrawingPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawingPoint message, length delimited. Does not implicitly {@link game.DrawingPoint.verify|verify} messages.
         * @param message DrawingPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DrawingPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawingPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DrawingPoint & game.DrawingPoint.$Shape} DrawingPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DrawingPoint & game.DrawingPoint.$Shape;

        /**
         * Decodes a DrawingPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DrawingPoint & game.DrawingPoint.$Shape} DrawingPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DrawingPoint & game.DrawingPoint.$Shape;

        /**
         * Verifies a DrawingPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawingPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawingPoint
         */
        static fromObject(object: { [k: string]: any }): game.DrawingPoint;

        /**
         * Creates a plain object from a DrawingPoint message. Also converts values to other types if specified.
         * @param message DrawingPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DrawingPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawingPoint to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DrawingPoint
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrawingPoint {

        /** Properties of a DrawingPoint. */
        interface $Properties {

            /** DrawingPoint x */
            x?: (number|null);

            /** DrawingPoint y */
            y?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrawingPoint. */
        type $Shape = game.DrawingPoint.$Properties;
    }

    /**
     * Properties of a DrawingStroke.
     * @deprecated Use game.DrawingStroke.$Properties instead.
     */
    interface IDrawingStroke extends game.DrawingStroke.$Properties {
    }

    /** Represents a DrawingStroke. */
    class DrawingStroke {

        /**
         * Constructs a new DrawingStroke.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DrawingStroke.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DrawingStroke strokeId. */
        strokeId: string;

        /** DrawingStroke tool. */
        tool: string;

        /** DrawingStroke color. */
        color: string;

        /** DrawingStroke size. */
        size: number;

        /** DrawingStroke points. */
        points: game.DrawingPoint.$Properties[];

        /**
         * Creates a new DrawingStroke instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawingStroke instance
         */
        static create(properties: game.DrawingStroke.$Shape): game.DrawingStroke & game.DrawingStroke.$Shape;
        static create(properties?: game.DrawingStroke.$Properties): game.DrawingStroke;

        /**
         * Encodes the specified DrawingStroke message. Does not implicitly {@link game.DrawingStroke.verify|verify} messages.
         * @param message DrawingStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DrawingStroke.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawingStroke message, length delimited. Does not implicitly {@link game.DrawingStroke.verify|verify} messages.
         * @param message DrawingStroke message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DrawingStroke.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawingStroke message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DrawingStroke & game.DrawingStroke.$Shape} DrawingStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DrawingStroke & game.DrawingStroke.$Shape;

        /**
         * Decodes a DrawingStroke message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DrawingStroke & game.DrawingStroke.$Shape} DrawingStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DrawingStroke & game.DrawingStroke.$Shape;

        /**
         * Verifies a DrawingStroke message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawingStroke message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawingStroke
         */
        static fromObject(object: { [k: string]: any }): game.DrawingStroke;

        /**
         * Creates a plain object from a DrawingStroke message. Also converts values to other types if specified.
         * @param message DrawingStroke
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DrawingStroke, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawingStroke to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DrawingStroke
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrawingStroke {

        /** Properties of a DrawingStroke. */
        interface $Properties {

            /** DrawingStroke strokeId */
            strokeId?: (string|null);

            /** DrawingStroke tool */
            tool?: (string|null);

            /** DrawingStroke color */
            color?: (string|null);

            /** DrawingStroke size */
            size?: (number|null);

            /** DrawingStroke points */
            points?: (game.DrawingPoint.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrawingStroke. */
        type $Shape = game.DrawingStroke.$Properties;
    }

    /**
     * Properties of a DrawingMessage.
     * @deprecated Use game.DrawingMessage.$Properties instead.
     */
    interface IDrawingMessage extends game.DrawingMessage.$Properties {
    }

    /** Represents a DrawingMessage. */
    class DrawingMessage {

        /**
         * Constructs a new DrawingMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DrawingMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DrawingMessage playerId. */
        playerId: string;

        /** DrawingMessage type. */
        type: string;

        /** DrawingMessage showToAll. */
        showToAll: boolean;

        /** DrawingMessage stroke. */
        stroke?: (game.DrawingStroke.$Properties|null);

        /** DrawingMessage strokes. */
        strokes: game.DrawingStroke.$Properties[];

        /**
         * Creates a new DrawingMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawingMessage instance
         */
        static create(properties: game.DrawingMessage.$Shape): game.DrawingMessage & game.DrawingMessage.$Shape;
        static create(properties?: game.DrawingMessage.$Properties): game.DrawingMessage;

        /**
         * Encodes the specified DrawingMessage message. Does not implicitly {@link game.DrawingMessage.verify|verify} messages.
         * @param message DrawingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DrawingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawingMessage message, length delimited. Does not implicitly {@link game.DrawingMessage.verify|verify} messages.
         * @param message DrawingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DrawingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawingMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DrawingMessage & game.DrawingMessage.$Shape} DrawingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DrawingMessage & game.DrawingMessage.$Shape;

        /**
         * Decodes a DrawingMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DrawingMessage & game.DrawingMessage.$Shape} DrawingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DrawingMessage & game.DrawingMessage.$Shape;

        /**
         * Verifies a DrawingMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawingMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawingMessage
         */
        static fromObject(object: { [k: string]: any }): game.DrawingMessage;

        /**
         * Creates a plain object from a DrawingMessage message. Also converts values to other types if specified.
         * @param message DrawingMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DrawingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawingMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DrawingMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DrawingMessage {

        /** Properties of a DrawingMessage. */
        interface $Properties {

            /** DrawingMessage playerId */
            playerId?: (string|null);

            /** DrawingMessage type */
            type?: (string|null);

            /** DrawingMessage showToAll */
            showToAll?: (boolean|null);

            /** DrawingMessage stroke */
            stroke?: (game.DrawingStroke.$Properties|null);

            /** DrawingMessage strokes */
            strokes?: (game.DrawingStroke.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DrawingMessage. */
        type $Shape = game.DrawingMessage.$Properties;
    }

    /**
     * Properties of an AudioChunk.
     * @deprecated Use game.AudioChunk.$Properties instead.
     */
    interface IAudioChunk extends game.AudioChunk.$Properties {
    }

    /** Represents an AudioChunk. */
    class AudioChunk {

        /**
         * Constructs a new AudioChunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.AudioChunk.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** AudioChunk playerId. */
        playerId: string;

        /** AudioChunk data. */
        data: Uint8Array;

        /** AudioChunk sampleRate. */
        sampleRate: number;

        /**
         * Creates a new AudioChunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioChunk instance
         */
        static create(properties: game.AudioChunk.$Shape): game.AudioChunk & game.AudioChunk.$Shape;
        static create(properties?: game.AudioChunk.$Properties): game.AudioChunk;

        /**
         * Encodes the specified AudioChunk message. Does not implicitly {@link game.AudioChunk.verify|verify} messages.
         * @param message AudioChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.AudioChunk.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioChunk message, length delimited. Does not implicitly {@link game.AudioChunk.verify|verify} messages.
         * @param message AudioChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.AudioChunk.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioChunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.AudioChunk & game.AudioChunk.$Shape} AudioChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.AudioChunk & game.AudioChunk.$Shape;

        /**
         * Decodes an AudioChunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.AudioChunk & game.AudioChunk.$Shape} AudioChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.AudioChunk & game.AudioChunk.$Shape;

        /**
         * Verifies an AudioChunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioChunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioChunk
         */
        static fromObject(object: { [k: string]: any }): game.AudioChunk;

        /**
         * Creates a plain object from an AudioChunk message. Also converts values to other types if specified.
         * @param message AudioChunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.AudioChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioChunk to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AudioChunk
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AudioChunk {

        /** Properties of an AudioChunk. */
        interface $Properties {

            /** AudioChunk playerId */
            playerId?: (string|null);

            /** AudioChunk data */
            data?: (Uint8Array|null);

            /** AudioChunk sampleRate */
            sampleRate?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AudioChunk. */
        type $Shape = game.AudioChunk.$Properties;
    }

    /**
     * Properties of a StateUpdate.
     * @deprecated Use game.StateUpdate.$Properties instead.
     */
    interface IStateUpdate extends game.StateUpdate.$Properties {
    }

    /** Represents a StateUpdate. */
    class StateUpdate {

        /**
         * Constructs a new StateUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.StateUpdate.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** StateUpdate players. */
        players: game.PlayerAction.$Properties[];

        /** StateUpdate action. */
        action: string;

        /**
         * Creates a new StateUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateUpdate instance
         */
        static create(properties: game.StateUpdate.$Shape): game.StateUpdate & game.StateUpdate.$Shape;
        static create(properties?: game.StateUpdate.$Properties): game.StateUpdate;

        /**
         * Encodes the specified StateUpdate message. Does not implicitly {@link game.StateUpdate.verify|verify} messages.
         * @param message StateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.StateUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link game.StateUpdate.verify|verify} messages.
         * @param message StateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.StateUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.StateUpdate & game.StateUpdate.$Shape} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.StateUpdate & game.StateUpdate.$Shape;

        /**
         * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.StateUpdate & game.StateUpdate.$Shape} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.StateUpdate & game.StateUpdate.$Shape;

        /**
         * Verifies a StateUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateUpdate
         */
        static fromObject(object: { [k: string]: any }): game.StateUpdate;

        /**
         * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
         * @param message StateUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.StateUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateUpdate to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StateUpdate
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StateUpdate {

        /** Properties of a StateUpdate. */
        interface $Properties {

            /** StateUpdate players */
            players?: (game.PlayerAction.$Properties[]|null);

            /** StateUpdate action */
            action?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StateUpdate. */
        type $Shape = game.StateUpdate.$Properties;
    }

    /**
     * Properties of a NoteMessage.
     * @deprecated Use game.NoteMessage.$Properties instead.
     */
    interface INoteMessage extends game.NoteMessage.$Properties {
    }

    /** Represents a NoteMessage. */
    class NoteMessage {

        /**
         * Constructs a new NoteMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.NoteMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** NoteMessage playerId. */
        playerId: string;

        /** NoteMessage playerName. */
        playerName: string;

        /** NoteMessage noteId. */
        noteId: string;

        /** NoteMessage type. */
        type: string;

        /** NoteMessage title. */
        title: string;

        /** NoteMessage content. */
        content: string;

        /** NoteMessage templateId. */
        templateId: string;

        /** NoteMessage permissions. */
        permissions: game.NotePermission.$Properties[];

        /** NoteMessage roomId. */
        roomId: string;

        /** NoteMessage notes. */
        notes: game.NoteMessage.$Properties[];

        /** NoteMessage linkedStatsOwnerId. */
        linkedStatsOwnerId: string;

        /** NoteMessage selectionAnchor. */
        selectionAnchor: number;

        /** NoteMessage selectionHead. */
        selectionHead: number;

        /** NoteMessage tabIndex. */
        tabIndex: number;

        /** NoteMessage active. */
        active: boolean;

        /**
         * Creates a new NoteMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoteMessage instance
         */
        static create(properties: game.NoteMessage.$Shape): game.NoteMessage & game.NoteMessage.$Shape;
        static create(properties?: game.NoteMessage.$Properties): game.NoteMessage;

        /**
         * Encodes the specified NoteMessage message. Does not implicitly {@link game.NoteMessage.verify|verify} messages.
         * @param message NoteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.NoteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoteMessage message, length delimited. Does not implicitly {@link game.NoteMessage.verify|verify} messages.
         * @param message NoteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.NoteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoteMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.NoteMessage & game.NoteMessage.$Shape} NoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.NoteMessage & game.NoteMessage.$Shape;

        /**
         * Decodes a NoteMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.NoteMessage & game.NoteMessage.$Shape} NoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.NoteMessage & game.NoteMessage.$Shape;

        /**
         * Verifies a NoteMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoteMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoteMessage
         */
        static fromObject(object: { [k: string]: any }): game.NoteMessage;

        /**
         * Creates a plain object from a NoteMessage message. Also converts values to other types if specified.
         * @param message NoteMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.NoteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoteMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NoteMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NoteMessage {

        /** Properties of a NoteMessage. */
        interface $Properties {

            /** NoteMessage playerId */
            playerId?: (string|null);

            /** NoteMessage playerName */
            playerName?: (string|null);

            /** NoteMessage noteId */
            noteId?: (string|null);

            /** NoteMessage type */
            type?: (string|null);

            /** NoteMessage title */
            title?: (string|null);

            /** NoteMessage content */
            content?: (string|null);

            /** NoteMessage templateId */
            templateId?: (string|null);

            /** NoteMessage permissions */
            permissions?: (game.NotePermission.$Properties[]|null);

            /** NoteMessage roomId */
            roomId?: (string|null);

            /** NoteMessage notes */
            notes?: (game.NoteMessage.$Properties[]|null);

            /** NoteMessage linkedStatsOwnerId */
            linkedStatsOwnerId?: (string|null);

            /** NoteMessage selectionAnchor */
            selectionAnchor?: (number|null);

            /** NoteMessage selectionHead */
            selectionHead?: (number|null);

            /** NoteMessage tabIndex */
            tabIndex?: (number|null);

            /** NoteMessage active */
            active?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NoteMessage. */
        type $Shape = game.NoteMessage.$Properties;
    }

    /**
     * Properties of a NotePermission.
     * @deprecated Use game.NotePermission.$Properties instead.
     */
    interface INotePermission extends game.NotePermission.$Properties {
    }

    /** Represents a NotePermission. */
    class NotePermission {

        /**
         * Constructs a new NotePermission.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.NotePermission.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** NotePermission playerId. */
        playerId: string;

        /** NotePermission playerName. */
        playerName: string;

        /** NotePermission canEdit. */
        canEdit: boolean;

        /**
         * Creates a new NotePermission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotePermission instance
         */
        static create(properties: game.NotePermission.$Shape): game.NotePermission & game.NotePermission.$Shape;
        static create(properties?: game.NotePermission.$Properties): game.NotePermission;

        /**
         * Encodes the specified NotePermission message. Does not implicitly {@link game.NotePermission.verify|verify} messages.
         * @param message NotePermission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.NotePermission.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotePermission message, length delimited. Does not implicitly {@link game.NotePermission.verify|verify} messages.
         * @param message NotePermission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.NotePermission.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotePermission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.NotePermission & game.NotePermission.$Shape} NotePermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.NotePermission & game.NotePermission.$Shape;

        /**
         * Decodes a NotePermission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.NotePermission & game.NotePermission.$Shape} NotePermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.NotePermission & game.NotePermission.$Shape;

        /**
         * Verifies a NotePermission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotePermission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotePermission
         */
        static fromObject(object: { [k: string]: any }): game.NotePermission;

        /**
         * Creates a plain object from a NotePermission message. Also converts values to other types if specified.
         * @param message NotePermission
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.NotePermission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotePermission to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NotePermission
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NotePermission {

        /** Properties of a NotePermission. */
        interface $Properties {

            /** NotePermission playerId */
            playerId?: (string|null);

            /** NotePermission playerName */
            playerName?: (string|null);

            /** NotePermission canEdit */
            canEdit?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NotePermission. */
        type $Shape = game.NotePermission.$Properties;
    }

    /**
     * Properties of a TemplateMessage.
     * @deprecated Use game.TemplateMessage.$Properties instead.
     */
    interface ITemplateMessage extends game.TemplateMessage.$Properties {
    }

    /** Represents a TemplateMessage. */
    class TemplateMessage {

        /**
         * Constructs a new TemplateMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.TemplateMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** TemplateMessage playerId. */
        playerId: string;

        /** TemplateMessage playerName. */
        playerName: string;

        /** TemplateMessage templateId. */
        templateId: string;

        /** TemplateMessage type. */
        type: string;

        /** TemplateMessage title. */
        title: string;

        /** TemplateMessage content. */
        content: string;

        /** TemplateMessage targetPlayerId. */
        targetPlayerId: string;

        /** TemplateMessage targetPlayerName. */
        targetPlayerName: string;

        /** TemplateMessage approved. */
        approved: boolean;

        /** TemplateMessage templates. */
        templates: game.TemplateMessage.$Properties[];

        /**
         * Creates a new TemplateMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateMessage instance
         */
        static create(properties: game.TemplateMessage.$Shape): game.TemplateMessage & game.TemplateMessage.$Shape;
        static create(properties?: game.TemplateMessage.$Properties): game.TemplateMessage;

        /**
         * Encodes the specified TemplateMessage message. Does not implicitly {@link game.TemplateMessage.verify|verify} messages.
         * @param message TemplateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.TemplateMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateMessage message, length delimited. Does not implicitly {@link game.TemplateMessage.verify|verify} messages.
         * @param message TemplateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.TemplateMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.TemplateMessage & game.TemplateMessage.$Shape} TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.TemplateMessage & game.TemplateMessage.$Shape;

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.TemplateMessage & game.TemplateMessage.$Shape} TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.TemplateMessage & game.TemplateMessage.$Shape;

        /**
         * Verifies a TemplateMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateMessage
         */
        static fromObject(object: { [k: string]: any }): game.TemplateMessage;

        /**
         * Creates a plain object from a TemplateMessage message. Also converts values to other types if specified.
         * @param message TemplateMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.TemplateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TemplateMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TemplateMessage {

        /** Properties of a TemplateMessage. */
        interface $Properties {

            /** TemplateMessage playerId */
            playerId?: (string|null);

            /** TemplateMessage playerName */
            playerName?: (string|null);

            /** TemplateMessage templateId */
            templateId?: (string|null);

            /** TemplateMessage type */
            type?: (string|null);

            /** TemplateMessage title */
            title?: (string|null);

            /** TemplateMessage content */
            content?: (string|null);

            /** TemplateMessage targetPlayerId */
            targetPlayerId?: (string|null);

            /** TemplateMessage targetPlayerName */
            targetPlayerName?: (string|null);

            /** TemplateMessage approved */
            approved?: (boolean|null);

            /** TemplateMessage templates */
            templates?: (game.TemplateMessage.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TemplateMessage. */
        type $Shape = game.TemplateMessage.$Properties;
    }

    /**
     * Properties of a RoomSettingMessage.
     * @deprecated Use game.RoomSettingMessage.$Properties instead.
     */
    interface IRoomSettingMessage extends game.RoomSettingMessage.$Properties {
    }

    /** Represents a RoomSettingMessage. */
    class RoomSettingMessage {

        /**
         * Constructs a new RoomSettingMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RoomSettingMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RoomSettingMessage playerId. */
        playerId: string;

        /** RoomSettingMessage type. */
        type: string;

        /** RoomSettingMessage value. */
        value: boolean;

        /** RoomSettingMessage stringValue. */
        stringValue: string;

        /** RoomSettingMessage floatValue. */
        floatValue: number;

        /**
         * Creates a new RoomSettingMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomSettingMessage instance
         */
        static create(properties: game.RoomSettingMessage.$Shape): game.RoomSettingMessage & game.RoomSettingMessage.$Shape;
        static create(properties?: game.RoomSettingMessage.$Properties): game.RoomSettingMessage;

        /**
         * Encodes the specified RoomSettingMessage message. Does not implicitly {@link game.RoomSettingMessage.verify|verify} messages.
         * @param message RoomSettingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RoomSettingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomSettingMessage message, length delimited. Does not implicitly {@link game.RoomSettingMessage.verify|verify} messages.
         * @param message RoomSettingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RoomSettingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomSettingMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RoomSettingMessage & game.RoomSettingMessage.$Shape} RoomSettingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RoomSettingMessage & game.RoomSettingMessage.$Shape;

        /**
         * Decodes a RoomSettingMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RoomSettingMessage & game.RoomSettingMessage.$Shape} RoomSettingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RoomSettingMessage & game.RoomSettingMessage.$Shape;

        /**
         * Verifies a RoomSettingMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomSettingMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomSettingMessage
         */
        static fromObject(object: { [k: string]: any }): game.RoomSettingMessage;

        /**
         * Creates a plain object from a RoomSettingMessage message. Also converts values to other types if specified.
         * @param message RoomSettingMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RoomSettingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomSettingMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RoomSettingMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RoomSettingMessage {

        /** Properties of a RoomSettingMessage. */
        interface $Properties {

            /** RoomSettingMessage playerId */
            playerId?: (string|null);

            /** RoomSettingMessage type */
            type?: (string|null);

            /** RoomSettingMessage value */
            value?: (boolean|null);

            /** RoomSettingMessage stringValue */
            stringValue?: (string|null);

            /** RoomSettingMessage floatValue */
            floatValue?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RoomSettingMessage. */
        type $Shape = game.RoomSettingMessage.$Properties;
    }

    /**
     * Properties of a UserListMessage.
     * @deprecated Use game.UserListMessage.$Properties instead.
     */
    interface IUserListMessage extends game.UserListMessage.$Properties {
    }

    /** Represents a UserListMessage. */
    class UserListMessage {

        /**
         * Constructs a new UserListMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.UserListMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** UserListMessage playerId. */
        playerId: string;

        /** UserListMessage type. */
        type: string;

        /** UserListMessage players. */
        players: game.PlayerInfo.$Properties[];

        /** UserListMessage permission. */
        permission?: (game.PlayerPermission.$Properties|null);

        /** UserListMessage globalPermission. */
        globalPermission?: (game.PlayerPermission.$Properties|null);

        /**
         * Creates a new UserListMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserListMessage instance
         */
        static create(properties: game.UserListMessage.$Shape): game.UserListMessage & game.UserListMessage.$Shape;
        static create(properties?: game.UserListMessage.$Properties): game.UserListMessage;

        /**
         * Encodes the specified UserListMessage message. Does not implicitly {@link game.UserListMessage.verify|verify} messages.
         * @param message UserListMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.UserListMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserListMessage message, length delimited. Does not implicitly {@link game.UserListMessage.verify|verify} messages.
         * @param message UserListMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.UserListMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserListMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.UserListMessage & game.UserListMessage.$Shape} UserListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserListMessage & game.UserListMessage.$Shape;

        /**
         * Decodes a UserListMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.UserListMessage & game.UserListMessage.$Shape} UserListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserListMessage & game.UserListMessage.$Shape;

        /**
         * Verifies a UserListMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserListMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserListMessage
         */
        static fromObject(object: { [k: string]: any }): game.UserListMessage;

        /**
         * Creates a plain object from a UserListMessage message. Also converts values to other types if specified.
         * @param message UserListMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.UserListMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserListMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserListMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserListMessage {

        /** Properties of a UserListMessage. */
        interface $Properties {

            /** UserListMessage playerId */
            playerId?: (string|null);

            /** UserListMessage type */
            type?: (string|null);

            /** UserListMessage players */
            players?: (game.PlayerInfo.$Properties[]|null);

            /** UserListMessage permission */
            permission?: (game.PlayerPermission.$Properties|null);

            /** UserListMessage globalPermission */
            globalPermission?: (game.PlayerPermission.$Properties|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserListMessage. */
        type $Shape = game.UserListMessage.$Properties;
    }

    /**
     * Properties of a PlayerInfo.
     * @deprecated Use game.PlayerInfo.$Properties instead.
     */
    interface IPlayerInfo extends game.PlayerInfo.$Properties {
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerInfo.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerInfo playerId. */
        playerId: string;

        /** PlayerInfo playerName. */
        playerName: string;

        /** PlayerInfo isRoomMaster. */
        isRoomMaster: boolean;

        /** PlayerInfo online. */
        online: boolean;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        static create(properties: game.PlayerInfo.$Shape): game.PlayerInfo & game.PlayerInfo.$Shape;
        static create(properties?: game.PlayerInfo.$Properties): game.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerInfo & game.PlayerInfo.$Shape} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerInfo & game.PlayerInfo.$Shape;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerInfo & game.PlayerInfo.$Shape} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerInfo & game.PlayerInfo.$Shape;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        static fromObject(object: { [k: string]: any }): game.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerInfo {

        /** Properties of a PlayerInfo. */
        interface $Properties {

            /** PlayerInfo playerId */
            playerId?: (string|null);

            /** PlayerInfo playerName */
            playerName?: (string|null);

            /** PlayerInfo isRoomMaster */
            isRoomMaster?: (boolean|null);

            /** PlayerInfo online */
            online?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerInfo. */
        type $Shape = game.PlayerInfo.$Properties;
    }

    /**
     * Properties of a PlayerPermission.
     * @deprecated Use game.PlayerPermission.$Properties instead.
     */
    interface IPlayerPermission extends game.PlayerPermission.$Properties {
    }

    /** Represents a PlayerPermission. */
    class PlayerPermission {

        /**
         * Constructs a new PlayerPermission.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.PlayerPermission.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** PlayerPermission playerId. */
        playerId: string;

        /** PlayerPermission playerName. */
        playerName: string;

        /** PlayerPermission roulette. */
        roulette?: (boolean|null);

        /** PlayerPermission dice. */
        dice?: (boolean|null);

        /** PlayerPermission micAll. */
        micAll?: (boolean|null);

        /** PlayerPermission micProx. */
        micProx?: (boolean|null);

        /** PlayerPermission listenAll. */
        listenAll?: (boolean|null);

        /** PlayerPermission listenProx. */
        listenProx?: (boolean|null);

        /** PlayerPermission followGlobalDarkness. */
        followGlobalDarkness?: (boolean|null);

        /** PlayerPermission darkness. */
        darkness?: (number|null);

        /** PlayerPermission followGlobalSight. */
        followGlobalSight?: (boolean|null);

        /** PlayerPermission sightRadius. */
        sightRadius?: (number|null);

        /** PlayerPermission sightShape. */
        sightShape?: (string|null);

        /** PlayerPermission sightLength. */
        sightLength?: (number|null);

        /** PlayerPermission sightAngle. */
        sightAngle?: (number|null);

        /** PlayerPermission sightShowToAll. */
        sightShowToAll?: (boolean|null);

        /**
         * Creates a new PlayerPermission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerPermission instance
         */
        static create(properties: game.PlayerPermission.$Shape): game.PlayerPermission & game.PlayerPermission.$Shape;
        static create(properties?: game.PlayerPermission.$Properties): game.PlayerPermission;

        /**
         * Encodes the specified PlayerPermission message. Does not implicitly {@link game.PlayerPermission.verify|verify} messages.
         * @param message PlayerPermission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.PlayerPermission.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerPermission message, length delimited. Does not implicitly {@link game.PlayerPermission.verify|verify} messages.
         * @param message PlayerPermission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.PlayerPermission.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerPermission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.PlayerPermission & game.PlayerPermission.$Shape} PlayerPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayerPermission & game.PlayerPermission.$Shape;

        /**
         * Decodes a PlayerPermission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.PlayerPermission & game.PlayerPermission.$Shape} PlayerPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayerPermission & game.PlayerPermission.$Shape;

        /**
         * Verifies a PlayerPermission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerPermission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerPermission
         */
        static fromObject(object: { [k: string]: any }): game.PlayerPermission;

        /**
         * Creates a plain object from a PlayerPermission message. Also converts values to other types if specified.
         * @param message PlayerPermission
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.PlayerPermission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerPermission to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerPermission
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerPermission {

        /** Properties of a PlayerPermission. */
        interface $Properties {

            /** PlayerPermission playerId */
            playerId?: (string|null);

            /** PlayerPermission playerName */
            playerName?: (string|null);

            /** PlayerPermission roulette */
            roulette?: (boolean|null);

            /** PlayerPermission dice */
            dice?: (boolean|null);

            /** PlayerPermission micAll */
            micAll?: (boolean|null);

            /** PlayerPermission micProx */
            micProx?: (boolean|null);

            /** PlayerPermission listenAll */
            listenAll?: (boolean|null);

            /** PlayerPermission listenProx */
            listenProx?: (boolean|null);

            /** PlayerPermission followGlobalDarkness */
            followGlobalDarkness?: (boolean|null);

            /** PlayerPermission darkness */
            darkness?: (number|null);

            /** PlayerPermission followGlobalSight */
            followGlobalSight?: (boolean|null);

            /** PlayerPermission sightRadius */
            sightRadius?: (number|null);

            /** PlayerPermission sightShape */
            sightShape?: (string|null);

            /** PlayerPermission sightLength */
            sightLength?: (number|null);

            /** PlayerPermission sightAngle */
            sightAngle?: (number|null);

            /** PlayerPermission sightShowToAll */
            sightShowToAll?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerPermission. */
        type $Shape = game.PlayerPermission.$Properties;
    }

    /**
     * Properties of a RouletteOption.
     * @deprecated Use game.RouletteOption.$Properties instead.
     */
    interface IRouletteOption extends game.RouletteOption.$Properties {
    }

    /** Represents a RouletteOption. */
    class RouletteOption {

        /**
         * Constructs a new RouletteOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RouletteOption.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RouletteOption name. */
        name: string;

        /** RouletteOption enabled. */
        enabled: boolean;

        /** RouletteOption desc. */
        desc: string;

        /**
         * Creates a new RouletteOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouletteOption instance
         */
        static create(properties: game.RouletteOption.$Shape): game.RouletteOption & game.RouletteOption.$Shape;
        static create(properties?: game.RouletteOption.$Properties): game.RouletteOption;

        /**
         * Encodes the specified RouletteOption message. Does not implicitly {@link game.RouletteOption.verify|verify} messages.
         * @param message RouletteOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RouletteOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouletteOption message, length delimited. Does not implicitly {@link game.RouletteOption.verify|verify} messages.
         * @param message RouletteOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RouletteOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouletteOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RouletteOption & game.RouletteOption.$Shape} RouletteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RouletteOption & game.RouletteOption.$Shape;

        /**
         * Decodes a RouletteOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RouletteOption & game.RouletteOption.$Shape} RouletteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RouletteOption & game.RouletteOption.$Shape;

        /**
         * Verifies a RouletteOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouletteOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouletteOption
         */
        static fromObject(object: { [k: string]: any }): game.RouletteOption;

        /**
         * Creates a plain object from a RouletteOption message. Also converts values to other types if specified.
         * @param message RouletteOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RouletteOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouletteOption to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RouletteOption
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RouletteOption {

        /** Properties of a RouletteOption. */
        interface $Properties {

            /** RouletteOption name */
            name?: (string|null);

            /** RouletteOption enabled */
            enabled?: (boolean|null);

            /** RouletteOption desc */
            desc?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RouletteOption. */
        type $Shape = game.RouletteOption.$Properties;
    }

    /**
     * Properties of a RouletteConfig.
     * @deprecated Use game.RouletteConfig.$Properties instead.
     */
    interface IRouletteConfig extends game.RouletteConfig.$Properties {
    }

    /** Represents a RouletteConfig. */
    class RouletteConfig {

        /**
         * Constructs a new RouletteConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RouletteConfig.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RouletteConfig configId. */
        configId: string;

        /** RouletteConfig name. */
        name: string;

        /** RouletteConfig rouletteType. */
        rouletteType: string;

        /** RouletteConfig visibility. */
        visibility: string;

        /** RouletteConfig options. */
        options: game.RouletteOption.$Properties[];

        /** RouletteConfig isActive. */
        isActive: boolean;

        /**
         * Creates a new RouletteConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouletteConfig instance
         */
        static create(properties: game.RouletteConfig.$Shape): game.RouletteConfig & game.RouletteConfig.$Shape;
        static create(properties?: game.RouletteConfig.$Properties): game.RouletteConfig;

        /**
         * Encodes the specified RouletteConfig message. Does not implicitly {@link game.RouletteConfig.verify|verify} messages.
         * @param message RouletteConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RouletteConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouletteConfig message, length delimited. Does not implicitly {@link game.RouletteConfig.verify|verify} messages.
         * @param message RouletteConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RouletteConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouletteConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RouletteConfig & game.RouletteConfig.$Shape} RouletteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RouletteConfig & game.RouletteConfig.$Shape;

        /**
         * Decodes a RouletteConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RouletteConfig & game.RouletteConfig.$Shape} RouletteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RouletteConfig & game.RouletteConfig.$Shape;

        /**
         * Verifies a RouletteConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouletteConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouletteConfig
         */
        static fromObject(object: { [k: string]: any }): game.RouletteConfig;

        /**
         * Creates a plain object from a RouletteConfig message. Also converts values to other types if specified.
         * @param message RouletteConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RouletteConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouletteConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RouletteConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RouletteConfig {

        /** Properties of a RouletteConfig. */
        interface $Properties {

            /** RouletteConfig configId */
            configId?: (string|null);

            /** RouletteConfig name */
            name?: (string|null);

            /** RouletteConfig rouletteType */
            rouletteType?: (string|null);

            /** RouletteConfig visibility */
            visibility?: (string|null);

            /** RouletteConfig options */
            options?: (game.RouletteOption.$Properties[]|null);

            /** RouletteConfig isActive */
            isActive?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RouletteConfig. */
        type $Shape = game.RouletteConfig.$Properties;
    }

    /**
     * Properties of a RouletteResult.
     * @deprecated Use game.RouletteResult.$Properties instead.
     */
    interface IRouletteResult extends game.RouletteResult.$Properties {
    }

    /** Represents a RouletteResult. */
    class RouletteResult {

        /**
         * Constructs a new RouletteResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RouletteResult.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RouletteResult playerId. */
        playerId: string;

        /** RouletteResult playerName. */
        playerName: string;

        /** RouletteResult optionLabel. */
        optionLabel: string;

        /**
         * Creates a new RouletteResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouletteResult instance
         */
        static create(properties: game.RouletteResult.$Shape): game.RouletteResult & game.RouletteResult.$Shape;
        static create(properties?: game.RouletteResult.$Properties): game.RouletteResult;

        /**
         * Encodes the specified RouletteResult message. Does not implicitly {@link game.RouletteResult.verify|verify} messages.
         * @param message RouletteResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RouletteResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouletteResult message, length delimited. Does not implicitly {@link game.RouletteResult.verify|verify} messages.
         * @param message RouletteResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RouletteResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouletteResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RouletteResult & game.RouletteResult.$Shape} RouletteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RouletteResult & game.RouletteResult.$Shape;

        /**
         * Decodes a RouletteResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RouletteResult & game.RouletteResult.$Shape} RouletteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RouletteResult & game.RouletteResult.$Shape;

        /**
         * Verifies a RouletteResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouletteResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouletteResult
         */
        static fromObject(object: { [k: string]: any }): game.RouletteResult;

        /**
         * Creates a plain object from a RouletteResult message. Also converts values to other types if specified.
         * @param message RouletteResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RouletteResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouletteResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RouletteResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RouletteResult {

        /** Properties of a RouletteResult. */
        interface $Properties {

            /** RouletteResult playerId */
            playerId?: (string|null);

            /** RouletteResult playerName */
            playerName?: (string|null);

            /** RouletteResult optionLabel */
            optionLabel?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RouletteResult. */
        type $Shape = game.RouletteResult.$Properties;
    }

    /**
     * Properties of a RouletteMessage.
     * @deprecated Use game.RouletteMessage.$Properties instead.
     */
    interface IRouletteMessage extends game.RouletteMessage.$Properties {
    }

    /** Represents a RouletteMessage. */
    class RouletteMessage {

        /**
         * Constructs a new RouletteMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.RouletteMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** RouletteMessage playerId. */
        playerId: string;

        /** RouletteMessage playerName. */
        playerName: string;

        /** RouletteMessage type. */
        type: string;

        /** RouletteMessage configId. */
        configId: string;

        /** RouletteMessage config. */
        config?: (game.RouletteConfig.$Properties|null);

        /** RouletteMessage configs. */
        configs: game.RouletteConfig.$Properties[];

        /** RouletteMessage results. */
        results: game.RouletteResult.$Properties[];

        /** RouletteMessage fullResultRecipientIds. */
        fullResultRecipientIds: string[];

        /**
         * Creates a new RouletteMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouletteMessage instance
         */
        static create(properties: game.RouletteMessage.$Shape): game.RouletteMessage & game.RouletteMessage.$Shape;
        static create(properties?: game.RouletteMessage.$Properties): game.RouletteMessage;

        /**
         * Encodes the specified RouletteMessage message. Does not implicitly {@link game.RouletteMessage.verify|verify} messages.
         * @param message RouletteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.RouletteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouletteMessage message, length delimited. Does not implicitly {@link game.RouletteMessage.verify|verify} messages.
         * @param message RouletteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.RouletteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouletteMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.RouletteMessage & game.RouletteMessage.$Shape} RouletteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RouletteMessage & game.RouletteMessage.$Shape;

        /**
         * Decodes a RouletteMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.RouletteMessage & game.RouletteMessage.$Shape} RouletteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RouletteMessage & game.RouletteMessage.$Shape;

        /**
         * Verifies a RouletteMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouletteMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouletteMessage
         */
        static fromObject(object: { [k: string]: any }): game.RouletteMessage;

        /**
         * Creates a plain object from a RouletteMessage message. Also converts values to other types if specified.
         * @param message RouletteMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.RouletteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouletteMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RouletteMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RouletteMessage {

        /** Properties of a RouletteMessage. */
        interface $Properties {

            /** RouletteMessage playerId */
            playerId?: (string|null);

            /** RouletteMessage playerName */
            playerName?: (string|null);

            /** RouletteMessage type */
            type?: (string|null);

            /** RouletteMessage configId */
            configId?: (string|null);

            /** RouletteMessage config */
            config?: (game.RouletteConfig.$Properties|null);

            /** RouletteMessage configs */
            configs?: (game.RouletteConfig.$Properties[]|null);

            /** RouletteMessage results */
            results?: (game.RouletteResult.$Properties[]|null);

            /** RouletteMessage fullResultRecipientIds */
            fullResultRecipientIds?: (string[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RouletteMessage. */
        type $Shape = game.RouletteMessage.$Properties;
    }

    /**
     * Properties of a DiceEntry.
     * @deprecated Use game.DiceEntry.$Properties instead.
     */
    interface IDiceEntry extends game.DiceEntry.$Properties {
    }

    /** Represents a DiceEntry. */
    class DiceEntry {

        /**
         * Constructs a new DiceEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DiceEntry.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DiceEntry diceType. */
        diceType: string;

        /** DiceEntry diceCount. */
        diceCount: number;

        /**
         * Creates a new DiceEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceEntry instance
         */
        static create(properties: game.DiceEntry.$Shape): game.DiceEntry & game.DiceEntry.$Shape;
        static create(properties?: game.DiceEntry.$Properties): game.DiceEntry;

        /**
         * Encodes the specified DiceEntry message. Does not implicitly {@link game.DiceEntry.verify|verify} messages.
         * @param message DiceEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DiceEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiceEntry message, length delimited. Does not implicitly {@link game.DiceEntry.verify|verify} messages.
         * @param message DiceEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DiceEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DiceEntry & game.DiceEntry.$Shape} DiceEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DiceEntry & game.DiceEntry.$Shape;

        /**
         * Decodes a DiceEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DiceEntry & game.DiceEntry.$Shape} DiceEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DiceEntry & game.DiceEntry.$Shape;

        /**
         * Verifies a DiceEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiceEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiceEntry
         */
        static fromObject(object: { [k: string]: any }): game.DiceEntry;

        /**
         * Creates a plain object from a DiceEntry message. Also converts values to other types if specified.
         * @param message DiceEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DiceEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiceEntry to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DiceEntry
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DiceEntry {

        /** Properties of a DiceEntry. */
        interface $Properties {

            /** DiceEntry diceType */
            diceType?: (string|null);

            /** DiceEntry diceCount */
            diceCount?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DiceEntry. */
        type $Shape = game.DiceEntry.$Properties;
    }

    /**
     * Properties of a DiceConfig.
     * @deprecated Use game.DiceConfig.$Properties instead.
     */
    interface IDiceConfig extends game.DiceConfig.$Properties {
    }

    /** Represents a DiceConfig. */
    class DiceConfig {

        /**
         * Constructs a new DiceConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DiceConfig.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DiceConfig configId. */
        configId: string;

        /** DiceConfig name. */
        name: string;

        /** DiceConfig diceType. */
        diceType: string;

        /** DiceConfig diceCount. */
        diceCount: number;

        /** DiceConfig visibility. */
        visibility: string;

        /** DiceConfig isActive. */
        isActive: boolean;

        /** DiceConfig entries. */
        entries: game.DiceEntry.$Properties[];

        /** DiceConfig mode. */
        mode: string;

        /**
         * Creates a new DiceConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceConfig instance
         */
        static create(properties: game.DiceConfig.$Shape): game.DiceConfig & game.DiceConfig.$Shape;
        static create(properties?: game.DiceConfig.$Properties): game.DiceConfig;

        /**
         * Encodes the specified DiceConfig message. Does not implicitly {@link game.DiceConfig.verify|verify} messages.
         * @param message DiceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DiceConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiceConfig message, length delimited. Does not implicitly {@link game.DiceConfig.verify|verify} messages.
         * @param message DiceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DiceConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DiceConfig & game.DiceConfig.$Shape} DiceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DiceConfig & game.DiceConfig.$Shape;

        /**
         * Decodes a DiceConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DiceConfig & game.DiceConfig.$Shape} DiceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DiceConfig & game.DiceConfig.$Shape;

        /**
         * Verifies a DiceConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiceConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiceConfig
         */
        static fromObject(object: { [k: string]: any }): game.DiceConfig;

        /**
         * Creates a plain object from a DiceConfig message. Also converts values to other types if specified.
         * @param message DiceConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiceConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DiceConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DiceConfig {

        /** Properties of a DiceConfig. */
        interface $Properties {

            /** DiceConfig configId */
            configId?: (string|null);

            /** DiceConfig name */
            name?: (string|null);

            /** DiceConfig diceType */
            diceType?: (string|null);

            /** DiceConfig diceCount */
            diceCount?: (number|null);

            /** DiceConfig visibility */
            visibility?: (string|null);

            /** DiceConfig isActive */
            isActive?: (boolean|null);

            /** DiceConfig entries */
            entries?: (game.DiceEntry.$Properties[]|null);

            /** DiceConfig mode */
            mode?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DiceConfig. */
        type $Shape = game.DiceConfig.$Properties;
    }

    /**
     * Properties of a DiceEntryResult.
     * @deprecated Use game.DiceEntryResult.$Properties instead.
     */
    interface IDiceEntryResult extends game.DiceEntryResult.$Properties {
    }

    /** Represents a DiceEntryResult. */
    class DiceEntryResult {

        /**
         * Constructs a new DiceEntryResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DiceEntryResult.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DiceEntryResult diceType. */
        diceType: string;

        /** DiceEntryResult values. */
        values: number[];

        /**
         * Creates a new DiceEntryResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceEntryResult instance
         */
        static create(properties: game.DiceEntryResult.$Shape): game.DiceEntryResult & game.DiceEntryResult.$Shape;
        static create(properties?: game.DiceEntryResult.$Properties): game.DiceEntryResult;

        /**
         * Encodes the specified DiceEntryResult message. Does not implicitly {@link game.DiceEntryResult.verify|verify} messages.
         * @param message DiceEntryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DiceEntryResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiceEntryResult message, length delimited. Does not implicitly {@link game.DiceEntryResult.verify|verify} messages.
         * @param message DiceEntryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DiceEntryResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceEntryResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DiceEntryResult & game.DiceEntryResult.$Shape} DiceEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DiceEntryResult & game.DiceEntryResult.$Shape;

        /**
         * Decodes a DiceEntryResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DiceEntryResult & game.DiceEntryResult.$Shape} DiceEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DiceEntryResult & game.DiceEntryResult.$Shape;

        /**
         * Verifies a DiceEntryResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiceEntryResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiceEntryResult
         */
        static fromObject(object: { [k: string]: any }): game.DiceEntryResult;

        /**
         * Creates a plain object from a DiceEntryResult message. Also converts values to other types if specified.
         * @param message DiceEntryResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DiceEntryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiceEntryResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DiceEntryResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DiceEntryResult {

        /** Properties of a DiceEntryResult. */
        interface $Properties {

            /** DiceEntryResult diceType */
            diceType?: (string|null);

            /** DiceEntryResult values */
            values?: (number[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DiceEntryResult. */
        type $Shape = game.DiceEntryResult.$Properties;
    }

    /**
     * Properties of a DiceResult.
     * @deprecated Use game.DiceResult.$Properties instead.
     */
    interface IDiceResult extends game.DiceResult.$Properties {
    }

    /** Represents a DiceResult. */
    class DiceResult {

        /**
         * Constructs a new DiceResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DiceResult.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DiceResult playerId. */
        playerId: string;

        /** DiceResult playerName. */
        playerName: string;

        /** DiceResult values. */
        values: number[];

        /** DiceResult total. */
        total: number;

        /** DiceResult entryResults. */
        entryResults: game.DiceEntryResult.$Properties[];

        /** DiceResult modifier. */
        modifier: number;

        /** DiceResult baseTotal. */
        baseTotal: number;

        /** DiceResult rollLabel. */
        rollLabel: string;

        /**
         * Creates a new DiceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceResult instance
         */
        static create(properties: game.DiceResult.$Shape): game.DiceResult & game.DiceResult.$Shape;
        static create(properties?: game.DiceResult.$Properties): game.DiceResult;

        /**
         * Encodes the specified DiceResult message. Does not implicitly {@link game.DiceResult.verify|verify} messages.
         * @param message DiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DiceResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiceResult message, length delimited. Does not implicitly {@link game.DiceResult.verify|verify} messages.
         * @param message DiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DiceResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DiceResult & game.DiceResult.$Shape} DiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DiceResult & game.DiceResult.$Shape;

        /**
         * Decodes a DiceResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DiceResult & game.DiceResult.$Shape} DiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DiceResult & game.DiceResult.$Shape;

        /**
         * Verifies a DiceResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiceResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiceResult
         */
        static fromObject(object: { [k: string]: any }): game.DiceResult;

        /**
         * Creates a plain object from a DiceResult message. Also converts values to other types if specified.
         * @param message DiceResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DiceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiceResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DiceResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DiceResult {

        /** Properties of a DiceResult. */
        interface $Properties {

            /** DiceResult playerId */
            playerId?: (string|null);

            /** DiceResult playerName */
            playerName?: (string|null);

            /** DiceResult values */
            values?: (number[]|null);

            /** DiceResult total */
            total?: (number|null);

            /** DiceResult entryResults */
            entryResults?: (game.DiceEntryResult.$Properties[]|null);

            /** DiceResult modifier */
            modifier?: (number|null);

            /** DiceResult baseTotal */
            baseTotal?: (number|null);

            /** DiceResult rollLabel */
            rollLabel?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DiceResult. */
        type $Shape = game.DiceResult.$Properties;
    }

    /**
     * Properties of a DiceMessage.
     * @deprecated Use game.DiceMessage.$Properties instead.
     */
    interface IDiceMessage extends game.DiceMessage.$Properties {
    }

    /** Represents a DiceMessage. */
    class DiceMessage {

        /**
         * Constructs a new DiceMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.DiceMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** DiceMessage playerId. */
        playerId: string;

        /** DiceMessage playerName. */
        playerName: string;

        /** DiceMessage type. */
        type: string;

        /** DiceMessage configId. */
        configId: string;

        /** DiceMessage config. */
        config?: (game.DiceConfig.$Properties|null);

        /** DiceMessage configs. */
        configs: game.DiceConfig.$Properties[];

        /** DiceMessage results. */
        results: game.DiceResult.$Properties[];

        /** DiceMessage modifier. */
        modifier: number;

        /** DiceMessage rollLabel. */
        rollLabel: string;

        /**
         * Creates a new DiceMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceMessage instance
         */
        static create(properties: game.DiceMessage.$Shape): game.DiceMessage & game.DiceMessage.$Shape;
        static create(properties?: game.DiceMessage.$Properties): game.DiceMessage;

        /**
         * Encodes the specified DiceMessage message. Does not implicitly {@link game.DiceMessage.verify|verify} messages.
         * @param message DiceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.DiceMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiceMessage message, length delimited. Does not implicitly {@link game.DiceMessage.verify|verify} messages.
         * @param message DiceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.DiceMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.DiceMessage & game.DiceMessage.$Shape} DiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DiceMessage & game.DiceMessage.$Shape;

        /**
         * Decodes a DiceMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.DiceMessage & game.DiceMessage.$Shape} DiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DiceMessage & game.DiceMessage.$Shape;

        /**
         * Verifies a DiceMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiceMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiceMessage
         */
        static fromObject(object: { [k: string]: any }): game.DiceMessage;

        /**
         * Creates a plain object from a DiceMessage message. Also converts values to other types if specified.
         * @param message DiceMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.DiceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiceMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DiceMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DiceMessage {

        /** Properties of a DiceMessage. */
        interface $Properties {

            /** DiceMessage playerId */
            playerId?: (string|null);

            /** DiceMessage playerName */
            playerName?: (string|null);

            /** DiceMessage type */
            type?: (string|null);

            /** DiceMessage configId */
            configId?: (string|null);

            /** DiceMessage config */
            config?: (game.DiceConfig.$Properties|null);

            /** DiceMessage configs */
            configs?: (game.DiceConfig.$Properties[]|null);

            /** DiceMessage results */
            results?: (game.DiceResult.$Properties[]|null);

            /** DiceMessage modifier */
            modifier?: (number|null);

            /** DiceMessage rollLabel */
            rollLabel?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DiceMessage. */
        type $Shape = game.DiceMessage.$Properties;
    }

    /**
     * Properties of a VoteOption.
     * @deprecated Use game.VoteOption.$Properties instead.
     */
    interface IVoteOption extends game.VoteOption.$Properties {
    }

    /** Represents a VoteOption. */
    class VoteOption {

        /**
         * Constructs a new VoteOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteOption.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteOption label. */
        label: string;

        /** VoteOption enabled. */
        enabled: boolean;

        /**
         * Creates a new VoteOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteOption instance
         */
        static create(properties: game.VoteOption.$Shape): game.VoteOption & game.VoteOption.$Shape;
        static create(properties?: game.VoteOption.$Properties): game.VoteOption;

        /**
         * Encodes the specified VoteOption message. Does not implicitly {@link game.VoteOption.verify|verify} messages.
         * @param message VoteOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteOption message, length delimited. Does not implicitly {@link game.VoteOption.verify|verify} messages.
         * @param message VoteOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteOption & game.VoteOption.$Shape} VoteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteOption & game.VoteOption.$Shape;

        /**
         * Decodes a VoteOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteOption & game.VoteOption.$Shape} VoteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteOption & game.VoteOption.$Shape;

        /**
         * Verifies a VoteOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteOption
         */
        static fromObject(object: { [k: string]: any }): game.VoteOption;

        /**
         * Creates a plain object from a VoteOption message. Also converts values to other types if specified.
         * @param message VoteOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteOption to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteOption
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteOption {

        /** Properties of a VoteOption. */
        interface $Properties {

            /** VoteOption label */
            label?: (string|null);

            /** VoteOption enabled */
            enabled?: (boolean|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteOption. */
        type $Shape = game.VoteOption.$Properties;
    }

    /**
     * Properties of a VoteParticipant.
     * @deprecated Use game.VoteParticipant.$Properties instead.
     */
    interface IVoteParticipant extends game.VoteParticipant.$Properties {
    }

    /** Represents a VoteParticipant. */
    class VoteParticipant {

        /**
         * Constructs a new VoteParticipant.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteParticipant.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteParticipant playerId. */
        playerId: string;

        /** VoteParticipant playerName. */
        playerName: string;

        /**
         * Creates a new VoteParticipant instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteParticipant instance
         */
        static create(properties: game.VoteParticipant.$Shape): game.VoteParticipant & game.VoteParticipant.$Shape;
        static create(properties?: game.VoteParticipant.$Properties): game.VoteParticipant;

        /**
         * Encodes the specified VoteParticipant message. Does not implicitly {@link game.VoteParticipant.verify|verify} messages.
         * @param message VoteParticipant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteParticipant.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteParticipant message, length delimited. Does not implicitly {@link game.VoteParticipant.verify|verify} messages.
         * @param message VoteParticipant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteParticipant.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteParticipant message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteParticipant & game.VoteParticipant.$Shape} VoteParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteParticipant & game.VoteParticipant.$Shape;

        /**
         * Decodes a VoteParticipant message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteParticipant & game.VoteParticipant.$Shape} VoteParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteParticipant & game.VoteParticipant.$Shape;

        /**
         * Verifies a VoteParticipant message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteParticipant message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteParticipant
         */
        static fromObject(object: { [k: string]: any }): game.VoteParticipant;

        /**
         * Creates a plain object from a VoteParticipant message. Also converts values to other types if specified.
         * @param message VoteParticipant
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteParticipant to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteParticipant
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteParticipant {

        /** Properties of a VoteParticipant. */
        interface $Properties {

            /** VoteParticipant playerId */
            playerId?: (string|null);

            /** VoteParticipant playerName */
            playerName?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteParticipant. */
        type $Shape = game.VoteParticipant.$Properties;
    }

    /**
     * Properties of a VoteConfig.
     * @deprecated Use game.VoteConfig.$Properties instead.
     */
    interface IVoteConfig extends game.VoteConfig.$Properties {
    }

    /** Represents a VoteConfig. */
    class VoteConfig {

        /**
         * Constructs a new VoteConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteConfig.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteConfig configId. */
        configId: string;

        /** VoteConfig name. */
        name: string;

        /** VoteConfig options. */
        options: game.VoteOption.$Properties[];

        /** VoteConfig waitTime. */
        waitTime: number;

        /** VoteConfig participants. */
        participants: game.VoteParticipant.$Properties[];

        /** VoteConfig isActive. */
        isActive: boolean;

        /** VoteConfig flow. */
        flow: string;

        /** VoteConfig mode. */
        mode: string;

        /** VoteConfig threshold. */
        threshold: string;

        /** VoteConfig thresholdValue. */
        thresholdValue: number;

        /** VoteConfig visibility. */
        visibility: string;

        /**
         * Creates a new VoteConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteConfig instance
         */
        static create(properties: game.VoteConfig.$Shape): game.VoteConfig & game.VoteConfig.$Shape;
        static create(properties?: game.VoteConfig.$Properties): game.VoteConfig;

        /**
         * Encodes the specified VoteConfig message. Does not implicitly {@link game.VoteConfig.verify|verify} messages.
         * @param message VoteConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteConfig message, length delimited. Does not implicitly {@link game.VoteConfig.verify|verify} messages.
         * @param message VoteConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteConfig.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteConfig & game.VoteConfig.$Shape} VoteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteConfig & game.VoteConfig.$Shape;

        /**
         * Decodes a VoteConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteConfig & game.VoteConfig.$Shape} VoteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteConfig & game.VoteConfig.$Shape;

        /**
         * Verifies a VoteConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteConfig
         */
        static fromObject(object: { [k: string]: any }): game.VoteConfig;

        /**
         * Creates a plain object from a VoteConfig message. Also converts values to other types if specified.
         * @param message VoteConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteConfig to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteConfig
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteConfig {

        /** Properties of a VoteConfig. */
        interface $Properties {

            /** VoteConfig configId */
            configId?: (string|null);

            /** VoteConfig name */
            name?: (string|null);

            /** VoteConfig options */
            options?: (game.VoteOption.$Properties[]|null);

            /** VoteConfig waitTime */
            waitTime?: (number|null);

            /** VoteConfig participants */
            participants?: (game.VoteParticipant.$Properties[]|null);

            /** VoteConfig isActive */
            isActive?: (boolean|null);

            /** VoteConfig flow */
            flow?: (string|null);

            /** VoteConfig mode */
            mode?: (string|null);

            /** VoteConfig threshold */
            threshold?: (string|null);

            /** VoteConfig thresholdValue */
            thresholdValue?: (number|null);

            /** VoteConfig visibility */
            visibility?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteConfig. */
        type $Shape = game.VoteConfig.$Properties;
    }

    /**
     * Properties of a VoteTally.
     * @deprecated Use game.VoteTally.$Properties instead.
     */
    interface IVoteTally extends game.VoteTally.$Properties {
    }

    /** Represents a VoteTally. */
    class VoteTally {

        /**
         * Constructs a new VoteTally.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteTally.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteTally label. */
        label: string;

        /** VoteTally count. */
        count: number;

        /** VoteTally passed. */
        passed: boolean;

        /** VoteTally value. */
        value: string;

        /**
         * Creates a new VoteTally instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteTally instance
         */
        static create(properties: game.VoteTally.$Shape): game.VoteTally & game.VoteTally.$Shape;
        static create(properties?: game.VoteTally.$Properties): game.VoteTally;

        /**
         * Encodes the specified VoteTally message. Does not implicitly {@link game.VoteTally.verify|verify} messages.
         * @param message VoteTally message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteTally.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteTally message, length delimited. Does not implicitly {@link game.VoteTally.verify|verify} messages.
         * @param message VoteTally message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteTally.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteTally message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteTally & game.VoteTally.$Shape} VoteTally
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteTally & game.VoteTally.$Shape;

        /**
         * Decodes a VoteTally message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteTally & game.VoteTally.$Shape} VoteTally
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteTally & game.VoteTally.$Shape;

        /**
         * Verifies a VoteTally message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteTally message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteTally
         */
        static fromObject(object: { [k: string]: any }): game.VoteTally;

        /**
         * Creates a plain object from a VoteTally message. Also converts values to other types if specified.
         * @param message VoteTally
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteTally, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteTally to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteTally
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteTally {

        /** Properties of a VoteTally. */
        interface $Properties {

            /** VoteTally label */
            label?: (string|null);

            /** VoteTally count */
            count?: (number|null);

            /** VoteTally passed */
            passed?: (boolean|null);

            /** VoteTally value */
            value?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteTally. */
        type $Shape = game.VoteTally.$Properties;
    }

    /**
     * Properties of a VoteSelection.
     * @deprecated Use game.VoteSelection.$Properties instead.
     */
    interface IVoteSelection extends game.VoteSelection.$Properties {
    }

    /** Represents a VoteSelection. */
    class VoteSelection {

        /**
         * Constructs a new VoteSelection.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteSelection.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteSelection value. */
        value: string;

        /** VoteSelection label. */
        label: string;

        /** VoteSelection playerId. */
        playerId: string;

        /** VoteSelection playerName. */
        playerName: string;

        /**
         * Creates a new VoteSelection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteSelection instance
         */
        static create(properties: game.VoteSelection.$Shape): game.VoteSelection & game.VoteSelection.$Shape;
        static create(properties?: game.VoteSelection.$Properties): game.VoteSelection;

        /**
         * Encodes the specified VoteSelection message. Does not implicitly {@link game.VoteSelection.verify|verify} messages.
         * @param message VoteSelection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteSelection.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteSelection message, length delimited. Does not implicitly {@link game.VoteSelection.verify|verify} messages.
         * @param message VoteSelection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteSelection.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteSelection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteSelection & game.VoteSelection.$Shape} VoteSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteSelection & game.VoteSelection.$Shape;

        /**
         * Decodes a VoteSelection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteSelection & game.VoteSelection.$Shape} VoteSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteSelection & game.VoteSelection.$Shape;

        /**
         * Verifies a VoteSelection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteSelection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteSelection
         */
        static fromObject(object: { [k: string]: any }): game.VoteSelection;

        /**
         * Creates a plain object from a VoteSelection message. Also converts values to other types if specified.
         * @param message VoteSelection
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteSelection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteSelection to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteSelection
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteSelection {

        /** Properties of a VoteSelection. */
        interface $Properties {

            /** VoteSelection value */
            value?: (string|null);

            /** VoteSelection label */
            label?: (string|null);

            /** VoteSelection playerId */
            playerId?: (string|null);

            /** VoteSelection playerName */
            playerName?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteSelection. */
        type $Shape = game.VoteSelection.$Properties;
    }

    /**
     * Properties of a VoteVoterResult.
     * @deprecated Use game.VoteVoterResult.$Properties instead.
     */
    interface IVoteVoterResult extends game.VoteVoterResult.$Properties {
    }

    /** Represents a VoteVoterResult. */
    class VoteVoterResult {

        /**
         * Constructs a new VoteVoterResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteVoterResult.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteVoterResult playerId. */
        playerId: string;

        /** VoteVoterResult playerName. */
        playerName: string;

        /** VoteVoterResult selections. */
        selections: game.VoteSelection.$Properties[];

        /**
         * Creates a new VoteVoterResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteVoterResult instance
         */
        static create(properties: game.VoteVoterResult.$Shape): game.VoteVoterResult & game.VoteVoterResult.$Shape;
        static create(properties?: game.VoteVoterResult.$Properties): game.VoteVoterResult;

        /**
         * Encodes the specified VoteVoterResult message. Does not implicitly {@link game.VoteVoterResult.verify|verify} messages.
         * @param message VoteVoterResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteVoterResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteVoterResult message, length delimited. Does not implicitly {@link game.VoteVoterResult.verify|verify} messages.
         * @param message VoteVoterResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteVoterResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteVoterResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteVoterResult & game.VoteVoterResult.$Shape} VoteVoterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteVoterResult & game.VoteVoterResult.$Shape;

        /**
         * Decodes a VoteVoterResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteVoterResult & game.VoteVoterResult.$Shape} VoteVoterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteVoterResult & game.VoteVoterResult.$Shape;

        /**
         * Verifies a VoteVoterResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteVoterResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteVoterResult
         */
        static fromObject(object: { [k: string]: any }): game.VoteVoterResult;

        /**
         * Creates a plain object from a VoteVoterResult message. Also converts values to other types if specified.
         * @param message VoteVoterResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteVoterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteVoterResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteVoterResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteVoterResult {

        /** Properties of a VoteVoterResult. */
        interface $Properties {

            /** VoteVoterResult playerId */
            playerId?: (string|null);

            /** VoteVoterResult playerName */
            playerName?: (string|null);

            /** VoteVoterResult selections */
            selections?: (game.VoteSelection.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteVoterResult. */
        type $Shape = game.VoteVoterResult.$Properties;
    }

    /**
     * Properties of a VoteMessage.
     * @deprecated Use game.VoteMessage.$Properties instead.
     */
    interface IVoteMessage extends game.VoteMessage.$Properties {
    }

    /** Represents a VoteMessage. */
    class VoteMessage {

        /**
         * Constructs a new VoteMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.VoteMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoteMessage playerId. */
        playerId: string;

        /** VoteMessage playerName. */
        playerName: string;

        /** VoteMessage type. */
        type: string;

        /** VoteMessage configId. */
        configId: string;

        /** VoteMessage config. */
        config?: (game.VoteConfig.$Properties|null);

        /** VoteMessage configs. */
        configs: game.VoteConfig.$Properties[];

        /** VoteMessage tallies. */
        tallies: game.VoteTally.$Properties[];

        /** VoteMessage selectedLabel. */
        selectedLabel: string;

        /** VoteMessage totalParticipants. */
        totalParticipants: number;

        /** VoteMessage votedCount. */
        votedCount: number;

        /** VoteMessage remainingSeconds. */
        remainingSeconds: number;

        /** VoteMessage selectedLabels. */
        selectedLabels: string[];

        /** VoteMessage selections. */
        selections: game.VoteSelection.$Properties[];

        /** VoteMessage voterResults. */
        voterResults: game.VoteVoterResult.$Properties[];

        /** VoteMessage currentPlayerId. */
        currentPlayerId: string;

        /** VoteMessage currentPlayerName. */
        currentPlayerName: string;

        /**
         * Creates a new VoteMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteMessage instance
         */
        static create(properties: game.VoteMessage.$Shape): game.VoteMessage & game.VoteMessage.$Shape;
        static create(properties?: game.VoteMessage.$Properties): game.VoteMessage;

        /**
         * Encodes the specified VoteMessage message. Does not implicitly {@link game.VoteMessage.verify|verify} messages.
         * @param message VoteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: game.VoteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteMessage message, length delimited. Does not implicitly {@link game.VoteMessage.verify|verify} messages.
         * @param message VoteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: game.VoteMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {game.VoteMessage & game.VoteMessage.$Shape} VoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.VoteMessage & game.VoteMessage.$Shape;

        /**
         * Decodes a VoteMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {game.VoteMessage & game.VoteMessage.$Shape} VoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.VoteMessage & game.VoteMessage.$Shape;

        /**
         * Verifies a VoteMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteMessage
         */
        static fromObject(object: { [k: string]: any }): game.VoteMessage;

        /**
         * Creates a plain object from a VoteMessage message. Also converts values to other types if specified.
         * @param message VoteMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: game.VoteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoteMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoteMessage {

        /** Properties of a VoteMessage. */
        interface $Properties {

            /** VoteMessage playerId */
            playerId?: (string|null);

            /** VoteMessage playerName */
            playerName?: (string|null);

            /** VoteMessage type */
            type?: (string|null);

            /** VoteMessage configId */
            configId?: (string|null);

            /** VoteMessage config */
            config?: (game.VoteConfig.$Properties|null);

            /** VoteMessage configs */
            configs?: (game.VoteConfig.$Properties[]|null);

            /** VoteMessage tallies */
            tallies?: (game.VoteTally.$Properties[]|null);

            /** VoteMessage selectedLabel */
            selectedLabel?: (string|null);

            /** VoteMessage totalParticipants */
            totalParticipants?: (number|null);

            /** VoteMessage votedCount */
            votedCount?: (number|null);

            /** VoteMessage remainingSeconds */
            remainingSeconds?: (number|null);

            /** VoteMessage selectedLabels */
            selectedLabels?: (string[]|null);

            /** VoteMessage selections */
            selections?: (game.VoteSelection.$Properties[]|null);

            /** VoteMessage voterResults */
            voterResults?: (game.VoteVoterResult.$Properties[]|null);

            /** VoteMessage currentPlayerId */
            currentPlayerId?: (string|null);

            /** VoteMessage currentPlayerName */
            currentPlayerName?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoteMessage. */
        type $Shape = game.VoteMessage.$Properties;
    }
}
