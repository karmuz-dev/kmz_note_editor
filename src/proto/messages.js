/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    game.Wrapper = (function() {

        /**
         * Properties of a Wrapper.
         * @typedef {Object} game.Wrapper.$Properties
         * @property {game.PlayerAction.$Properties|null} [action] Wrapper action
         * @property {game.AudioChunk.$Properties|null} [audio] Wrapper audio
         * @property {game.StateUpdate.$Properties|null} [update] Wrapper update
         * @property {game.ChatMessage.$Properties|null} [chat] Wrapper chat
         * @property {game.NoteMessage.$Properties|null} [note] Wrapper note
         * @property {game.TemplateMessage.$Properties|null} [template] Wrapper template
         * @property {game.RoomSettingMessage.$Properties|null} [roomSetting] Wrapper roomSetting
         * @property {game.UserListMessage.$Properties|null} [userList] Wrapper userList
         * @property {game.RouletteMessage.$Properties|null} [roulette] Wrapper roulette
         * @property {game.DiceMessage.$Properties|null} [dice] Wrapper dice
         * @property {game.VoteMessage.$Properties|null} [vote] Wrapper vote
         * @property {game.RoomItemMessage.$Properties|null} [roomItem] Wrapper roomItem
         * @property {game.TokenMessage.$Properties|null} [token] Wrapper token
         * @property {game.ChatReadSync.$Properties|null} [chatReadSync] Wrapper chatReadSync
         * @property {game.ChatMarkRead.$Properties|null} [chatMarkRead] Wrapper chatMarkRead
         * @property {game.UserInfoMessage.$Properties|null} [userInfo] Wrapper userInfo
         * @property {game.DrawingMessage.$Properties|null} [drawing] Wrapper drawing
         * @property {game.PlayerStatsMessage.$Properties|null} [playerStats] Wrapper playerStats
         * @property {"action"|"audio"|"update"|"chat"|"note"|"template"|"roomSetting"|"userList"|"roulette"|"dice"|"vote"|"roomItem"|"token"|"chatReadSync"|"chatMarkRead"|"userInfo"|"drawing"|"playerStats"} [content] Wrapper content
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Wrapper.
         * @memberof game
         * @interface IWrapper
         * @augments game.Wrapper.$Properties
         * @deprecated Use game.Wrapper.$Properties instead.
         */

        /**
         * Narrowed shape of a Wrapper.
         * @typedef {{
         *   action?: game.PlayerAction.$Shape|null;
         *   audio?: game.AudioChunk.$Shape|null;
         *   update?: game.StateUpdate.$Shape|null;
         *   chat?: game.ChatMessage.$Shape|null;
         *   note?: game.NoteMessage.$Shape|null;
         *   template?: game.TemplateMessage.$Shape|null;
         *   roomSetting?: game.RoomSettingMessage.$Shape|null;
         *   userList?: game.UserListMessage.$Shape|null;
         *   roulette?: game.RouletteMessage.$Shape|null;
         *   dice?: game.DiceMessage.$Shape|null;
         *   vote?: game.VoteMessage.$Shape|null;
         *   roomItem?: game.RoomItemMessage.$Shape|null;
         *   token?: game.TokenMessage.$Shape|null;
         *   chatReadSync?: game.ChatReadSync.$Shape|null;
         *   chatMarkRead?: game.ChatMarkRead.$Shape|null;
         *   userInfo?: game.UserInfoMessage.$Shape|null;
         *   drawing?: game.DrawingMessage.$Shape|null;
         *   playerStats?: game.PlayerStatsMessage.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ content?: undefined; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "action"; action: game.PlayerAction.$Shape; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "audio"; action?: null; audio: game.AudioChunk.$Shape; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "update"; action?: null; audio?: null; update: game.StateUpdate.$Shape; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chat"; action?: null; audio?: null; update?: null; chat: game.ChatMessage.$Shape; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "note"; action?: null; audio?: null; update?: null; chat?: null; note: game.NoteMessage.$Shape; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "template"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template: game.TemplateMessage.$Shape; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roomSetting"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting: game.RoomSettingMessage.$Shape; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "userList"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList: game.UserListMessage.$Shape; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roulette"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette: game.RouletteMessage.$Shape; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "dice"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice: game.DiceMessage.$Shape; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "vote"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote: game.VoteMessage.$Shape; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "roomItem"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem: game.RoomItemMessage.$Shape; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "token"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token: game.TokenMessage.$Shape; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chatReadSync"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync: game.ChatReadSync.$Shape; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "chatMarkRead"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead: game.ChatMarkRead.$Shape; userInfo?: null; drawing?: null; playerStats?: null }|{ content?: "userInfo"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo: game.UserInfoMessage.$Shape; drawing?: null; playerStats?: null }|{ content?: "drawing"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing: game.DrawingMessage.$Shape; playerStats?: null }|{ content?: "playerStats"; action?: null; audio?: null; update?: null; chat?: null; note?: null; template?: null; roomSetting?: null; userList?: null; roulette?: null; dice?: null; vote?: null; roomItem?: null; token?: null; chatReadSync?: null; chatMarkRead?: null; userInfo?: null; drawing?: null; playerStats: game.PlayerStatsMessage.$Shape })
         * )} game.Wrapper.$Shape
         */

        /**
         * Constructs a new Wrapper.
         * @memberof game
         * @classdesc Represents a Wrapper.
         * @constructor
         * @param {game.Wrapper.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Wrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Wrapper action.
         * @member {game.PlayerAction.$Properties|null|undefined} action
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.action = null;

        /**
         * Wrapper audio.
         * @member {game.AudioChunk.$Properties|null|undefined} audio
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.audio = null;

        /**
         * Wrapper update.
         * @member {game.StateUpdate.$Properties|null|undefined} update
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.update = null;

        /**
         * Wrapper chat.
         * @member {game.ChatMessage.$Properties|null|undefined} chat
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.chat = null;

        /**
         * Wrapper note.
         * @member {game.NoteMessage.$Properties|null|undefined} note
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.note = null;

        /**
         * Wrapper template.
         * @member {game.TemplateMessage.$Properties|null|undefined} template
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.template = null;

        /**
         * Wrapper roomSetting.
         * @member {game.RoomSettingMessage.$Properties|null|undefined} roomSetting
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.roomSetting = null;

        /**
         * Wrapper userList.
         * @member {game.UserListMessage.$Properties|null|undefined} userList
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.userList = null;

        /**
         * Wrapper roulette.
         * @member {game.RouletteMessage.$Properties|null|undefined} roulette
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.roulette = null;

        /**
         * Wrapper dice.
         * @member {game.DiceMessage.$Properties|null|undefined} dice
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.dice = null;

        /**
         * Wrapper vote.
         * @member {game.VoteMessage.$Properties|null|undefined} vote
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.vote = null;

        /**
         * Wrapper roomItem.
         * @member {game.RoomItemMessage.$Properties|null|undefined} roomItem
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.roomItem = null;

        /**
         * Wrapper token.
         * @member {game.TokenMessage.$Properties|null|undefined} token
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.token = null;

        /**
         * Wrapper chatReadSync.
         * @member {game.ChatReadSync.$Properties|null|undefined} chatReadSync
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.chatReadSync = null;

        /**
         * Wrapper chatMarkRead.
         * @member {game.ChatMarkRead.$Properties|null|undefined} chatMarkRead
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.chatMarkRead = null;

        /**
         * Wrapper userInfo.
         * @member {game.UserInfoMessage.$Properties|null|undefined} userInfo
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.userInfo = null;

        /**
         * Wrapper drawing.
         * @member {game.DrawingMessage.$Properties|null|undefined} drawing
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.drawing = null;

        /**
         * Wrapper playerStats.
         * @member {game.PlayerStatsMessage.$Properties|null|undefined} playerStats
         * @memberof game.Wrapper
         * @instance
         */
        Wrapper.prototype.playerStats = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Wrapper content.
         * @member {"action"|"audio"|"update"|"chat"|"note"|"template"|"roomSetting"|"userList"|"roulette"|"dice"|"vote"|"roomItem"|"token"|"chatReadSync"|"chatMarkRead"|"userInfo"|"drawing"|"playerStats"|undefined} content
         * @memberof game.Wrapper
         * @instance
         */
        Object.defineProperty(Wrapper.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["action", "audio", "update", "chat", "note", "template", "roomSetting", "userList", "roulette", "dice", "vote", "roomItem", "token", "chatReadSync", "chatMarkRead", "userInfo", "drawing", "playerStats"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Wrapper instance using the specified properties.
         * @function create
         * @memberof game.Wrapper
         * @static
         * @param {game.Wrapper.$Properties=} [properties] Properties to set
         * @returns {game.Wrapper} Wrapper instance
         * @type {{
         *   (properties: game.Wrapper.$Shape): game.Wrapper & game.Wrapper.$Shape;
         *   (properties?: game.Wrapper.$Properties): game.Wrapper;
         * }}
         */
        Wrapper.create = function create(properties) {
            return new Wrapper(properties);
        };

        /**
         * Encodes the specified Wrapper message. Does not implicitly {@link game.Wrapper.verify|verify} messages.
         * @function encode
         * @memberof game.Wrapper
         * @static
         * @param {game.Wrapper.$Properties} message Wrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wrapper.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                $root.game.PlayerAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.audio != null && Object.hasOwnProperty.call(message, "audio"))
                $root.game.AudioChunk.encode(message.audio, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.update != null && Object.hasOwnProperty.call(message, "update"))
                $root.game.StateUpdate.encode(message.update, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                $root.game.ChatMessage.encode(message.chat, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                $root.game.NoteMessage.encode(message.note, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.template != null && Object.hasOwnProperty.call(message, "template"))
                $root.game.TemplateMessage.encode(message.template, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.roomSetting != null && Object.hasOwnProperty.call(message, "roomSetting"))
                $root.game.RoomSettingMessage.encode(message.roomSetting, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.userList != null && Object.hasOwnProperty.call(message, "userList"))
                $root.game.UserListMessage.encode(message.userList, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.roulette != null && Object.hasOwnProperty.call(message, "roulette"))
                $root.game.RouletteMessage.encode(message.roulette, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.dice != null && Object.hasOwnProperty.call(message, "dice"))
                $root.game.DiceMessage.encode(message.dice, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.vote != null && Object.hasOwnProperty.call(message, "vote"))
                $root.game.VoteMessage.encode(message.vote, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
            if (message.roomItem != null && Object.hasOwnProperty.call(message, "roomItem"))
                $root.game.RoomItemMessage.encode(message.roomItem, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                $root.game.TokenMessage.encode(message.token, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.chatReadSync != null && Object.hasOwnProperty.call(message, "chatReadSync"))
                $root.game.ChatReadSync.encode(message.chatReadSync, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.chatMarkRead != null && Object.hasOwnProperty.call(message, "chatMarkRead"))
                $root.game.ChatMarkRead.encode(message.chatMarkRead, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.game.UserInfoMessage.encode(message.userInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
            if (message.drawing != null && Object.hasOwnProperty.call(message, "drawing"))
                $root.game.DrawingMessage.encode(message.drawing, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
            if (message.playerStats != null && Object.hasOwnProperty.call(message, "playerStats"))
                $root.game.PlayerStatsMessage.encode(message.playerStats, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Wrapper message, length delimited. Does not implicitly {@link game.Wrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Wrapper
         * @static
         * @param {game.Wrapper.$Properties} message Wrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Wrapper message from the specified reader or buffer.
         * @function decode
         * @memberof game.Wrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Wrapper & game.Wrapper.$Shape} Wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wrapper.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = $root.game.PlayerAction.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 2: {
                        message.audio = $root.game.AudioChunk.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 3: {
                        message.update = $root.game.StateUpdate.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        message.chat = $root.game.ChatMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 5: {
                        message.note = $root.game.NoteMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        message.template = $root.game.TemplateMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 7: {
                        message.roomSetting = $root.game.RoomSettingMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 8: {
                        message.userList = $root.game.UserListMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 9: {
                        message.roulette = $root.game.RouletteMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 10: {
                        message.dice = $root.game.DiceMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 11: {
                        message.vote = $root.game.VoteMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 12: {
                        message.roomItem = $root.game.RoomItemMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 13: {
                        message.token = $root.game.TokenMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 14: {
                        message.chatReadSync = $root.game.ChatReadSync.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 15: {
                        message.chatMarkRead = $root.game.ChatMarkRead.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 16: {
                        message.userInfo = $root.game.UserInfoMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 17: {
                        message.drawing = $root.game.DrawingMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 18: {
                        message.playerStats = $root.game.PlayerStatsMessage.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Wrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Wrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Wrapper & game.Wrapper.$Shape} Wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Wrapper message.
         * @function verify
         * @memberof game.Wrapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Wrapper.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.action != null && message.hasOwnProperty("action")) {
                properties.content = 1;
                {
                    let error = $root.game.PlayerAction.verify(message.action, long + 1);
                    if (error)
                        return "action." + error;
                }
            }
            if (message.audio != null && message.hasOwnProperty("audio")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.AudioChunk.verify(message.audio, long + 1);
                    if (error)
                        return "audio." + error;
                }
            }
            if (message.update != null && message.hasOwnProperty("update")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.StateUpdate.verify(message.update, long + 1);
                    if (error)
                        return "update." + error;
                }
            }
            if (message.chat != null && message.hasOwnProperty("chat")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.ChatMessage.verify(message.chat, long + 1);
                    if (error)
                        return "chat." + error;
                }
            }
            if (message.note != null && message.hasOwnProperty("note")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.NoteMessage.verify(message.note, long + 1);
                    if (error)
                        return "note." + error;
                }
            }
            if (message.template != null && message.hasOwnProperty("template")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.TemplateMessage.verify(message.template, long + 1);
                    if (error)
                        return "template." + error;
                }
            }
            if (message.roomSetting != null && message.hasOwnProperty("roomSetting")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.RoomSettingMessage.verify(message.roomSetting, long + 1);
                    if (error)
                        return "roomSetting." + error;
                }
            }
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.UserListMessage.verify(message.userList, long + 1);
                    if (error)
                        return "userList." + error;
                }
            }
            if (message.roulette != null && message.hasOwnProperty("roulette")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.RouletteMessage.verify(message.roulette, long + 1);
                    if (error)
                        return "roulette." + error;
                }
            }
            if (message.dice != null && message.hasOwnProperty("dice")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.DiceMessage.verify(message.dice, long + 1);
                    if (error)
                        return "dice." + error;
                }
            }
            if (message.vote != null && message.hasOwnProperty("vote")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.VoteMessage.verify(message.vote, long + 1);
                    if (error)
                        return "vote." + error;
                }
            }
            if (message.roomItem != null && message.hasOwnProperty("roomItem")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.RoomItemMessage.verify(message.roomItem, long + 1);
                    if (error)
                        return "roomItem." + error;
                }
            }
            if (message.token != null && message.hasOwnProperty("token")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.TokenMessage.verify(message.token, long + 1);
                    if (error)
                        return "token." + error;
                }
            }
            if (message.chatReadSync != null && message.hasOwnProperty("chatReadSync")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.ChatReadSync.verify(message.chatReadSync, long + 1);
                    if (error)
                        return "chatReadSync." + error;
                }
            }
            if (message.chatMarkRead != null && message.hasOwnProperty("chatMarkRead")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.ChatMarkRead.verify(message.chatMarkRead, long + 1);
                    if (error)
                        return "chatMarkRead." + error;
                }
            }
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.UserInfoMessage.verify(message.userInfo, long + 1);
                    if (error)
                        return "userInfo." + error;
                }
            }
            if (message.drawing != null && message.hasOwnProperty("drawing")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.DrawingMessage.verify(message.drawing, long + 1);
                    if (error)
                        return "drawing." + error;
                }
            }
            if (message.playerStats != null && message.hasOwnProperty("playerStats")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.game.PlayerStatsMessage.verify(message.playerStats, long + 1);
                    if (error)
                        return "playerStats." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Wrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Wrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Wrapper} Wrapper
         */
        Wrapper.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.action != null) {
                if (typeof object.action !== "object")
                    throw TypeError(".game.Wrapper.action: object expected");
                message.action = $root.game.PlayerAction.fromObject(object.action, long + 1);
            }
            if (object.audio != null) {
                if (typeof object.audio !== "object")
                    throw TypeError(".game.Wrapper.audio: object expected");
                message.audio = $root.game.AudioChunk.fromObject(object.audio, long + 1);
            }
            if (object.update != null) {
                if (typeof object.update !== "object")
                    throw TypeError(".game.Wrapper.update: object expected");
                message.update = $root.game.StateUpdate.fromObject(object.update, long + 1);
            }
            if (object.chat != null) {
                if (typeof object.chat !== "object")
                    throw TypeError(".game.Wrapper.chat: object expected");
                message.chat = $root.game.ChatMessage.fromObject(object.chat, long + 1);
            }
            if (object.note != null) {
                if (typeof object.note !== "object")
                    throw TypeError(".game.Wrapper.note: object expected");
                message.note = $root.game.NoteMessage.fromObject(object.note, long + 1);
            }
            if (object.template != null) {
                if (typeof object.template !== "object")
                    throw TypeError(".game.Wrapper.template: object expected");
                message.template = $root.game.TemplateMessage.fromObject(object.template, long + 1);
            }
            if (object.roomSetting != null) {
                if (typeof object.roomSetting !== "object")
                    throw TypeError(".game.Wrapper.roomSetting: object expected");
                message.roomSetting = $root.game.RoomSettingMessage.fromObject(object.roomSetting, long + 1);
            }
            if (object.userList != null) {
                if (typeof object.userList !== "object")
                    throw TypeError(".game.Wrapper.userList: object expected");
                message.userList = $root.game.UserListMessage.fromObject(object.userList, long + 1);
            }
            if (object.roulette != null) {
                if (typeof object.roulette !== "object")
                    throw TypeError(".game.Wrapper.roulette: object expected");
                message.roulette = $root.game.RouletteMessage.fromObject(object.roulette, long + 1);
            }
            if (object.dice != null) {
                if (typeof object.dice !== "object")
                    throw TypeError(".game.Wrapper.dice: object expected");
                message.dice = $root.game.DiceMessage.fromObject(object.dice, long + 1);
            }
            if (object.vote != null) {
                if (typeof object.vote !== "object")
                    throw TypeError(".game.Wrapper.vote: object expected");
                message.vote = $root.game.VoteMessage.fromObject(object.vote, long + 1);
            }
            if (object.roomItem != null) {
                if (typeof object.roomItem !== "object")
                    throw TypeError(".game.Wrapper.roomItem: object expected");
                message.roomItem = $root.game.RoomItemMessage.fromObject(object.roomItem, long + 1);
            }
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".game.Wrapper.token: object expected");
                message.token = $root.game.TokenMessage.fromObject(object.token, long + 1);
            }
            if (object.chatReadSync != null) {
                if (typeof object.chatReadSync !== "object")
                    throw TypeError(".game.Wrapper.chatReadSync: object expected");
                message.chatReadSync = $root.game.ChatReadSync.fromObject(object.chatReadSync, long + 1);
            }
            if (object.chatMarkRead != null) {
                if (typeof object.chatMarkRead !== "object")
                    throw TypeError(".game.Wrapper.chatMarkRead: object expected");
                message.chatMarkRead = $root.game.ChatMarkRead.fromObject(object.chatMarkRead, long + 1);
            }
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".game.Wrapper.userInfo: object expected");
                message.userInfo = $root.game.UserInfoMessage.fromObject(object.userInfo, long + 1);
            }
            if (object.drawing != null) {
                if (typeof object.drawing !== "object")
                    throw TypeError(".game.Wrapper.drawing: object expected");
                message.drawing = $root.game.DrawingMessage.fromObject(object.drawing, long + 1);
            }
            if (object.playerStats != null) {
                if (typeof object.playerStats !== "object")
                    throw TypeError(".game.Wrapper.playerStats: object expected");
                message.playerStats = $root.game.PlayerStatsMessage.fromObject(object.playerStats, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Wrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Wrapper
         * @static
         * @param {game.Wrapper} message Wrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Wrapper.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (message.action != null && message.hasOwnProperty("action")) {
                object.action = $root.game.PlayerAction.toObject(message.action, options, _depth + 1);
                if (options.oneofs)
                    object.content = "action";
            }
            if (message.audio != null && message.hasOwnProperty("audio")) {
                object.audio = $root.game.AudioChunk.toObject(message.audio, options, _depth + 1);
                if (options.oneofs)
                    object.content = "audio";
            }
            if (message.update != null && message.hasOwnProperty("update")) {
                object.update = $root.game.StateUpdate.toObject(message.update, options, _depth + 1);
                if (options.oneofs)
                    object.content = "update";
            }
            if (message.chat != null && message.hasOwnProperty("chat")) {
                object.chat = $root.game.ChatMessage.toObject(message.chat, options, _depth + 1);
                if (options.oneofs)
                    object.content = "chat";
            }
            if (message.note != null && message.hasOwnProperty("note")) {
                object.note = $root.game.NoteMessage.toObject(message.note, options, _depth + 1);
                if (options.oneofs)
                    object.content = "note";
            }
            if (message.template != null && message.hasOwnProperty("template")) {
                object.template = $root.game.TemplateMessage.toObject(message.template, options, _depth + 1);
                if (options.oneofs)
                    object.content = "template";
            }
            if (message.roomSetting != null && message.hasOwnProperty("roomSetting")) {
                object.roomSetting = $root.game.RoomSettingMessage.toObject(message.roomSetting, options, _depth + 1);
                if (options.oneofs)
                    object.content = "roomSetting";
            }
            if (message.userList != null && message.hasOwnProperty("userList")) {
                object.userList = $root.game.UserListMessage.toObject(message.userList, options, _depth + 1);
                if (options.oneofs)
                    object.content = "userList";
            }
            if (message.roulette != null && message.hasOwnProperty("roulette")) {
                object.roulette = $root.game.RouletteMessage.toObject(message.roulette, options, _depth + 1);
                if (options.oneofs)
                    object.content = "roulette";
            }
            if (message.dice != null && message.hasOwnProperty("dice")) {
                object.dice = $root.game.DiceMessage.toObject(message.dice, options, _depth + 1);
                if (options.oneofs)
                    object.content = "dice";
            }
            if (message.vote != null && message.hasOwnProperty("vote")) {
                object.vote = $root.game.VoteMessage.toObject(message.vote, options, _depth + 1);
                if (options.oneofs)
                    object.content = "vote";
            }
            if (message.roomItem != null && message.hasOwnProperty("roomItem")) {
                object.roomItem = $root.game.RoomItemMessage.toObject(message.roomItem, options, _depth + 1);
                if (options.oneofs)
                    object.content = "roomItem";
            }
            if (message.token != null && message.hasOwnProperty("token")) {
                object.token = $root.game.TokenMessage.toObject(message.token, options, _depth + 1);
                if (options.oneofs)
                    object.content = "token";
            }
            if (message.chatReadSync != null && message.hasOwnProperty("chatReadSync")) {
                object.chatReadSync = $root.game.ChatReadSync.toObject(message.chatReadSync, options, _depth + 1);
                if (options.oneofs)
                    object.content = "chatReadSync";
            }
            if (message.chatMarkRead != null && message.hasOwnProperty("chatMarkRead")) {
                object.chatMarkRead = $root.game.ChatMarkRead.toObject(message.chatMarkRead, options, _depth + 1);
                if (options.oneofs)
                    object.content = "chatMarkRead";
            }
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                object.userInfo = $root.game.UserInfoMessage.toObject(message.userInfo, options, _depth + 1);
                if (options.oneofs)
                    object.content = "userInfo";
            }
            if (message.drawing != null && message.hasOwnProperty("drawing")) {
                object.drawing = $root.game.DrawingMessage.toObject(message.drawing, options, _depth + 1);
                if (options.oneofs)
                    object.content = "drawing";
            }
            if (message.playerStats != null && message.hasOwnProperty("playerStats")) {
                object.playerStats = $root.game.PlayerStatsMessage.toObject(message.playerStats, options, _depth + 1);
                if (options.oneofs)
                    object.content = "playerStats";
            }
            return object;
        };

        /**
         * Converts this Wrapper to JSON.
         * @function toJSON
         * @memberof game.Wrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Wrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Wrapper
         * @function getTypeUrl
         * @memberof game.Wrapper
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Wrapper.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.Wrapper";
        };

        return Wrapper;
    })();

    game.RoomItemData = (function() {

        /**
         * Properties of a RoomItemData.
         * @typedef {Object} game.RoomItemData.$Properties
         * @property {string|null} [itemId] RoomItemData itemId
         * @property {string|null} [itemKey] RoomItemData itemKey
         * @property {number|null} [gridX] RoomItemData gridX
         * @property {number|null} [gridY] RoomItemData gridY
         * @property {number|null} [widthGrid] RoomItemData widthGrid
         * @property {number|null} [heightGrid] RoomItemData heightGrid
         * @property {string|null} [itemType] RoomItemData itemType
         * @property {string|null} [tokenId] RoomItemData tokenId
         * @property {string|null} [tokenName] RoomItemData tokenName
         * @property {number|null} [baseHp] RoomItemData baseHp
         * @property {number|null} [currentHp] RoomItemData currentHp
         * @property {string|null} [imageUrl] RoomItemData imageUrl
         * @property {number|null} [rotation] RoomItemData rotation
         * @property {string|null} [targetRoomId] RoomItemData targetRoomId
         * @property {string|null} [targetRoomName] RoomItemData targetRoomName
         * @property {string|null} [hpVisibility] RoomItemData hpVisibility
         * @property {boolean|null} [haveHp] RoomItemData haveHp
         * @property {number|null} [sightRadius] RoomItemData sightRadius
         * @property {string|null} [sightShape] RoomItemData sightShape
         * @property {number|null} [sightLength] RoomItemData sightLength
         * @property {number|null} [sightAngle] RoomItemData sightAngle
         * @property {boolean|null} [sightShowToAll] RoomItemData sightShowToAll
         * @property {string|null} [spawnTargetType] RoomItemData spawnTargetType
         * @property {string|null} [spawnTargetUserId] RoomItemData spawnTargetUserId
         * @property {string|null} [spawnTargetUserName] RoomItemData spawnTargetUserName
         * @property {string|null} [tokenDescription] RoomItemData tokenDescription
         * @property {string|null} [tokenInfo] RoomItemData tokenInfo
         * @property {string|null} [tokenVisibility] RoomItemData tokenVisibility
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RoomItemData.
         * @memberof game
         * @interface IRoomItemData
         * @augments game.RoomItemData.$Properties
         * @deprecated Use game.RoomItemData.$Properties instead.
         */

        /**
         * Shape of a RoomItemData.
         * @typedef {game.RoomItemData.$Properties} game.RoomItemData.$Shape
         */

        /**
         * Constructs a new RoomItemData.
         * @memberof game
         * @classdesc Represents a RoomItemData.
         * @constructor
         * @param {game.RoomItemData.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RoomItemData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomItemData itemId.
         * @member {string} itemId
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.itemId = "";

        /**
         * RoomItemData itemKey.
         * @member {string} itemKey
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.itemKey = "";

        /**
         * RoomItemData gridX.
         * @member {number} gridX
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.gridX = 0;

        /**
         * RoomItemData gridY.
         * @member {number} gridY
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.gridY = 0;

        /**
         * RoomItemData widthGrid.
         * @member {number} widthGrid
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.widthGrid = 0;

        /**
         * RoomItemData heightGrid.
         * @member {number} heightGrid
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.heightGrid = 0;

        /**
         * RoomItemData itemType.
         * @member {string} itemType
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.itemType = "";

        /**
         * RoomItemData tokenId.
         * @member {string} tokenId
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.tokenId = "";

        /**
         * RoomItemData tokenName.
         * @member {string} tokenName
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.tokenName = "";

        /**
         * RoomItemData baseHp.
         * @member {number} baseHp
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.baseHp = 0;

        /**
         * RoomItemData currentHp.
         * @member {number} currentHp
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.currentHp = 0;

        /**
         * RoomItemData imageUrl.
         * @member {string} imageUrl
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.imageUrl = "";

        /**
         * RoomItemData rotation.
         * @member {number} rotation
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.rotation = 0;

        /**
         * RoomItemData targetRoomId.
         * @member {string} targetRoomId
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.targetRoomId = "";

        /**
         * RoomItemData targetRoomName.
         * @member {string} targetRoomName
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.targetRoomName = "";

        /**
         * RoomItemData hpVisibility.
         * @member {string} hpVisibility
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.hpVisibility = "";

        /**
         * RoomItemData haveHp.
         * @member {boolean} haveHp
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.haveHp = false;

        /**
         * RoomItemData sightRadius.
         * @member {number} sightRadius
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.sightRadius = 0;

        /**
         * RoomItemData sightShape.
         * @member {string} sightShape
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.sightShape = "";

        /**
         * RoomItemData sightLength.
         * @member {number} sightLength
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.sightLength = 0;

        /**
         * RoomItemData sightAngle.
         * @member {number} sightAngle
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.sightAngle = 0;

        /**
         * RoomItemData sightShowToAll.
         * @member {boolean} sightShowToAll
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.sightShowToAll = false;

        /**
         * RoomItemData spawnTargetType.
         * @member {string} spawnTargetType
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.spawnTargetType = "";

        /**
         * RoomItemData spawnTargetUserId.
         * @member {string} spawnTargetUserId
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.spawnTargetUserId = "";

        /**
         * RoomItemData spawnTargetUserName.
         * @member {string} spawnTargetUserName
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.spawnTargetUserName = "";

        /**
         * RoomItemData tokenDescription.
         * @member {string} tokenDescription
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.tokenDescription = "";

        /**
         * RoomItemData tokenInfo.
         * @member {string} tokenInfo
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.tokenInfo = "";

        /**
         * RoomItemData tokenVisibility.
         * @member {string} tokenVisibility
         * @memberof game.RoomItemData
         * @instance
         */
        RoomItemData.prototype.tokenVisibility = "";

        /**
         * Creates a new RoomItemData instance using the specified properties.
         * @function create
         * @memberof game.RoomItemData
         * @static
         * @param {game.RoomItemData.$Properties=} [properties] Properties to set
         * @returns {game.RoomItemData} RoomItemData instance
         * @type {{
         *   (properties: game.RoomItemData.$Shape): game.RoomItemData & game.RoomItemData.$Shape;
         *   (properties?: game.RoomItemData.$Properties): game.RoomItemData;
         * }}
         */
        RoomItemData.create = function create(properties) {
            return new RoomItemData(properties);
        };

        /**
         * Encodes the specified RoomItemData message. Does not implicitly {@link game.RoomItemData.verify|verify} messages.
         * @function encode
         * @memberof game.RoomItemData
         * @static
         * @param {game.RoomItemData.$Properties} message RoomItemData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItemData.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.itemKey != null && Object.hasOwnProperty.call(message, "itemKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.itemKey);
            if (message.gridX != null && Object.hasOwnProperty.call(message, "gridX"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gridX);
            if (message.gridY != null && Object.hasOwnProperty.call(message, "gridY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gridY);
            if (message.widthGrid != null && Object.hasOwnProperty.call(message, "widthGrid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.widthGrid);
            if (message.heightGrid != null && Object.hasOwnProperty.call(message, "heightGrid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.heightGrid);
            if (message.itemType != null && Object.hasOwnProperty.call(message, "itemType"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.itemType);
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.tokenId);
            if (message.tokenName != null && Object.hasOwnProperty.call(message, "tokenName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.tokenName);
            if (message.baseHp != null && Object.hasOwnProperty.call(message, "baseHp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.baseHp);
            if (message.currentHp != null && Object.hasOwnProperty.call(message, "currentHp"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.currentHp);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.imageUrl);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.rotation);
            if (message.targetRoomId != null && Object.hasOwnProperty.call(message, "targetRoomId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.targetRoomId);
            if (message.targetRoomName != null && Object.hasOwnProperty.call(message, "targetRoomName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.targetRoomName);
            if (message.hpVisibility != null && Object.hasOwnProperty.call(message, "hpVisibility"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.hpVisibility);
            if (message.haveHp != null && Object.hasOwnProperty.call(message, "haveHp"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.haveHp);
            if (message.sightRadius != null && Object.hasOwnProperty.call(message, "sightRadius"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.sightRadius);
            if (message.sightShape != null && Object.hasOwnProperty.call(message, "sightShape"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.sightShape);
            if (message.sightLength != null && Object.hasOwnProperty.call(message, "sightLength"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.sightLength);
            if (message.sightAngle != null && Object.hasOwnProperty.call(message, "sightAngle"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.sightAngle);
            if (message.sightShowToAll != null && Object.hasOwnProperty.call(message, "sightShowToAll"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.sightShowToAll);
            if (message.spawnTargetType != null && Object.hasOwnProperty.call(message, "spawnTargetType"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.spawnTargetType);
            if (message.spawnTargetUserId != null && Object.hasOwnProperty.call(message, "spawnTargetUserId"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.spawnTargetUserId);
            if (message.spawnTargetUserName != null && Object.hasOwnProperty.call(message, "spawnTargetUserName"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.spawnTargetUserName);
            if (message.tokenDescription != null && Object.hasOwnProperty.call(message, "tokenDescription"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.tokenDescription);
            if (message.tokenInfo != null && Object.hasOwnProperty.call(message, "tokenInfo"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.tokenInfo);
            if (message.tokenVisibility != null && Object.hasOwnProperty.call(message, "tokenVisibility"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.tokenVisibility);
            return writer;
        };

        /**
         * Encodes the specified RoomItemData message, length delimited. Does not implicitly {@link game.RoomItemData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RoomItemData
         * @static
         * @param {game.RoomItemData.$Properties} message RoomItemData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItemData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RoomItemData message from the specified reader or buffer.
         * @function decode
         * @memberof game.RoomItemData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RoomItemData & game.RoomItemData.$Shape} RoomItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItemData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.itemKey = reader.string();
                        break;
                    }
                case 3: {
                        message.gridX = reader.int32();
                        break;
                    }
                case 4: {
                        message.gridY = reader.int32();
                        break;
                    }
                case 5: {
                        message.widthGrid = reader.int32();
                        break;
                    }
                case 6: {
                        message.heightGrid = reader.int32();
                        break;
                    }
                case 7: {
                        message.itemType = reader.string();
                        break;
                    }
                case 8: {
                        message.tokenId = reader.string();
                        break;
                    }
                case 9: {
                        message.tokenName = reader.string();
                        break;
                    }
                case 10: {
                        message.baseHp = reader.int32();
                        break;
                    }
                case 11: {
                        message.currentHp = reader.int32();
                        break;
                    }
                case 12: {
                        message.imageUrl = reader.string();
                        break;
                    }
                case 13: {
                        message.rotation = reader.int32();
                        break;
                    }
                case 14: {
                        message.targetRoomId = reader.string();
                        break;
                    }
                case 15: {
                        message.targetRoomName = reader.string();
                        break;
                    }
                case 16: {
                        message.hpVisibility = reader.string();
                        break;
                    }
                case 17: {
                        message.haveHp = reader.bool();
                        break;
                    }
                case 18: {
                        message.sightRadius = reader.int32();
                        break;
                    }
                case 19: {
                        message.sightShape = reader.string();
                        break;
                    }
                case 20: {
                        message.sightLength = reader.int32();
                        break;
                    }
                case 21: {
                        message.sightAngle = reader.int32();
                        break;
                    }
                case 22: {
                        message.sightShowToAll = reader.bool();
                        break;
                    }
                case 23: {
                        message.spawnTargetType = reader.string();
                        break;
                    }
                case 24: {
                        message.spawnTargetUserId = reader.string();
                        break;
                    }
                case 25: {
                        message.spawnTargetUserName = reader.string();
                        break;
                    }
                case 26: {
                        message.tokenDescription = reader.string();
                        break;
                    }
                case 27: {
                        message.tokenInfo = reader.string();
                        break;
                    }
                case 28: {
                        message.tokenVisibility = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomItemData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RoomItemData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RoomItemData & game.RoomItemData.$Shape} RoomItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItemData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomItemData message.
         * @function verify
         * @memberof game.RoomItemData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomItemData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.itemKey != null && message.hasOwnProperty("itemKey"))
                if (!$util.isString(message.itemKey))
                    return "itemKey: string expected";
            if (message.gridX != null && message.hasOwnProperty("gridX"))
                if (!$util.isInteger(message.gridX))
                    return "gridX: integer expected";
            if (message.gridY != null && message.hasOwnProperty("gridY"))
                if (!$util.isInteger(message.gridY))
                    return "gridY: integer expected";
            if (message.widthGrid != null && message.hasOwnProperty("widthGrid"))
                if (!$util.isInteger(message.widthGrid))
                    return "widthGrid: integer expected";
            if (message.heightGrid != null && message.hasOwnProperty("heightGrid"))
                if (!$util.isInteger(message.heightGrid))
                    return "heightGrid: integer expected";
            if (message.itemType != null && message.hasOwnProperty("itemType"))
                if (!$util.isString(message.itemType))
                    return "itemType: string expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            if (message.tokenName != null && message.hasOwnProperty("tokenName"))
                if (!$util.isString(message.tokenName))
                    return "tokenName: string expected";
            if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                if (!$util.isInteger(message.baseHp))
                    return "baseHp: integer expected";
            if (message.currentHp != null && message.hasOwnProperty("currentHp"))
                if (!$util.isInteger(message.currentHp))
                    return "currentHp: integer expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (!$util.isInteger(message.rotation))
                    return "rotation: integer expected";
            if (message.targetRoomId != null && message.hasOwnProperty("targetRoomId"))
                if (!$util.isString(message.targetRoomId))
                    return "targetRoomId: string expected";
            if (message.targetRoomName != null && message.hasOwnProperty("targetRoomName"))
                if (!$util.isString(message.targetRoomName))
                    return "targetRoomName: string expected";
            if (message.hpVisibility != null && message.hasOwnProperty("hpVisibility"))
                if (!$util.isString(message.hpVisibility))
                    return "hpVisibility: string expected";
            if (message.haveHp != null && message.hasOwnProperty("haveHp"))
                if (typeof message.haveHp !== "boolean")
                    return "haveHp: boolean expected";
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius"))
                if (!$util.isInteger(message.sightRadius))
                    return "sightRadius: integer expected";
            if (message.sightShape != null && message.hasOwnProperty("sightShape"))
                if (!$util.isString(message.sightShape))
                    return "sightShape: string expected";
            if (message.sightLength != null && message.hasOwnProperty("sightLength"))
                if (!$util.isInteger(message.sightLength))
                    return "sightLength: integer expected";
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle"))
                if (!$util.isInteger(message.sightAngle))
                    return "sightAngle: integer expected";
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll"))
                if (typeof message.sightShowToAll !== "boolean")
                    return "sightShowToAll: boolean expected";
            if (message.spawnTargetType != null && message.hasOwnProperty("spawnTargetType"))
                if (!$util.isString(message.spawnTargetType))
                    return "spawnTargetType: string expected";
            if (message.spawnTargetUserId != null && message.hasOwnProperty("spawnTargetUserId"))
                if (!$util.isString(message.spawnTargetUserId))
                    return "spawnTargetUserId: string expected";
            if (message.spawnTargetUserName != null && message.hasOwnProperty("spawnTargetUserName"))
                if (!$util.isString(message.spawnTargetUserName))
                    return "spawnTargetUserName: string expected";
            if (message.tokenDescription != null && message.hasOwnProperty("tokenDescription"))
                if (!$util.isString(message.tokenDescription))
                    return "tokenDescription: string expected";
            if (message.tokenInfo != null && message.hasOwnProperty("tokenInfo"))
                if (!$util.isString(message.tokenInfo))
                    return "tokenInfo: string expected";
            if (message.tokenVisibility != null && message.hasOwnProperty("tokenVisibility"))
                if (!$util.isString(message.tokenVisibility))
                    return "tokenVisibility: string expected";
            return null;
        };

        /**
         * Creates a RoomItemData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RoomItemData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RoomItemData} RoomItemData
         */
        RoomItemData.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.itemKey != null)
                message.itemKey = String(object.itemKey);
            if (object.gridX != null)
                message.gridX = object.gridX | 0;
            if (object.gridY != null)
                message.gridY = object.gridY | 0;
            if (object.widthGrid != null)
                message.widthGrid = object.widthGrid | 0;
            if (object.heightGrid != null)
                message.heightGrid = object.heightGrid | 0;
            if (object.itemType != null)
                message.itemType = String(object.itemType);
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            if (object.tokenName != null)
                message.tokenName = String(object.tokenName);
            if (object.baseHp != null)
                message.baseHp = object.baseHp | 0;
            if (object.currentHp != null)
                message.currentHp = object.currentHp | 0;
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.rotation != null)
                message.rotation = object.rotation | 0;
            if (object.targetRoomId != null)
                message.targetRoomId = String(object.targetRoomId);
            if (object.targetRoomName != null)
                message.targetRoomName = String(object.targetRoomName);
            if (object.hpVisibility != null)
                message.hpVisibility = String(object.hpVisibility);
            if (object.haveHp != null)
                message.haveHp = Boolean(object.haveHp);
            if (object.sightRadius != null)
                message.sightRadius = object.sightRadius | 0;
            if (object.sightShape != null)
                message.sightShape = String(object.sightShape);
            if (object.sightLength != null)
                message.sightLength = object.sightLength | 0;
            if (object.sightAngle != null)
                message.sightAngle = object.sightAngle | 0;
            if (object.sightShowToAll != null)
                message.sightShowToAll = Boolean(object.sightShowToAll);
            if (object.spawnTargetType != null)
                message.spawnTargetType = String(object.spawnTargetType);
            if (object.spawnTargetUserId != null)
                message.spawnTargetUserId = String(object.spawnTargetUserId);
            if (object.spawnTargetUserName != null)
                message.spawnTargetUserName = String(object.spawnTargetUserName);
            if (object.tokenDescription != null)
                message.tokenDescription = String(object.tokenDescription);
            if (object.tokenInfo != null)
                message.tokenInfo = String(object.tokenInfo);
            if (object.tokenVisibility != null)
                message.tokenVisibility = String(object.tokenVisibility);
            return message;
        };

        /**
         * Creates a plain object from a RoomItemData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RoomItemData
         * @static
         * @param {game.RoomItemData} message RoomItemData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomItemData.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.itemKey = "";
                object.gridX = 0;
                object.gridY = 0;
                object.widthGrid = 0;
                object.heightGrid = 0;
                object.itemType = "";
                object.tokenId = "";
                object.tokenName = "";
                object.baseHp = 0;
                object.currentHp = 0;
                object.imageUrl = "";
                object.rotation = 0;
                object.targetRoomId = "";
                object.targetRoomName = "";
                object.hpVisibility = "";
                object.haveHp = false;
                object.sightRadius = 0;
                object.sightShape = "";
                object.sightLength = 0;
                object.sightAngle = 0;
                object.sightShowToAll = false;
                object.spawnTargetType = "";
                object.spawnTargetUserId = "";
                object.spawnTargetUserName = "";
                object.tokenDescription = "";
                object.tokenInfo = "";
                object.tokenVisibility = "";
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemKey != null && message.hasOwnProperty("itemKey"))
                object.itemKey = message.itemKey;
            if (message.gridX != null && message.hasOwnProperty("gridX"))
                object.gridX = message.gridX;
            if (message.gridY != null && message.hasOwnProperty("gridY"))
                object.gridY = message.gridY;
            if (message.widthGrid != null && message.hasOwnProperty("widthGrid"))
                object.widthGrid = message.widthGrid;
            if (message.heightGrid != null && message.hasOwnProperty("heightGrid"))
                object.heightGrid = message.heightGrid;
            if (message.itemType != null && message.hasOwnProperty("itemType"))
                object.itemType = message.itemType;
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            if (message.tokenName != null && message.hasOwnProperty("tokenName"))
                object.tokenName = message.tokenName;
            if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                object.baseHp = message.baseHp;
            if (message.currentHp != null && message.hasOwnProperty("currentHp"))
                object.currentHp = message.currentHp;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = message.rotation;
            if (message.targetRoomId != null && message.hasOwnProperty("targetRoomId"))
                object.targetRoomId = message.targetRoomId;
            if (message.targetRoomName != null && message.hasOwnProperty("targetRoomName"))
                object.targetRoomName = message.targetRoomName;
            if (message.hpVisibility != null && message.hasOwnProperty("hpVisibility"))
                object.hpVisibility = message.hpVisibility;
            if (message.haveHp != null && message.hasOwnProperty("haveHp"))
                object.haveHp = message.haveHp;
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius"))
                object.sightRadius = message.sightRadius;
            if (message.sightShape != null && message.hasOwnProperty("sightShape"))
                object.sightShape = message.sightShape;
            if (message.sightLength != null && message.hasOwnProperty("sightLength"))
                object.sightLength = message.sightLength;
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle"))
                object.sightAngle = message.sightAngle;
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll"))
                object.sightShowToAll = message.sightShowToAll;
            if (message.spawnTargetType != null && message.hasOwnProperty("spawnTargetType"))
                object.spawnTargetType = message.spawnTargetType;
            if (message.spawnTargetUserId != null && message.hasOwnProperty("spawnTargetUserId"))
                object.spawnTargetUserId = message.spawnTargetUserId;
            if (message.spawnTargetUserName != null && message.hasOwnProperty("spawnTargetUserName"))
                object.spawnTargetUserName = message.spawnTargetUserName;
            if (message.tokenDescription != null && message.hasOwnProperty("tokenDescription"))
                object.tokenDescription = message.tokenDescription;
            if (message.tokenInfo != null && message.hasOwnProperty("tokenInfo"))
                object.tokenInfo = message.tokenInfo;
            if (message.tokenVisibility != null && message.hasOwnProperty("tokenVisibility"))
                object.tokenVisibility = message.tokenVisibility;
            return object;
        };

        /**
         * Converts this RoomItemData to JSON.
         * @function toJSON
         * @memberof game.RoomItemData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomItemData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RoomItemData
         * @function getTypeUrl
         * @memberof game.RoomItemData
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RoomItemData.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RoomItemData";
        };

        return RoomItemData;
    })();

    game.RoomItemMessage = (function() {

        /**
         * Properties of a RoomItemMessage.
         * @typedef {Object} game.RoomItemMessage.$Properties
         * @property {string|null} [playerId] RoomItemMessage playerId
         * @property {string|null} [type] RoomItemMessage type
         * @property {game.RoomItemData.$Properties|null} [item] RoomItemMessage item
         * @property {Array.<game.RoomItemData.$Properties>|null} [items] RoomItemMessage items
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RoomItemMessage.
         * @memberof game
         * @interface IRoomItemMessage
         * @augments game.RoomItemMessage.$Properties
         * @deprecated Use game.RoomItemMessage.$Properties instead.
         */

        /**
         * Shape of a RoomItemMessage.
         * @typedef {game.RoomItemMessage.$Properties} game.RoomItemMessage.$Shape
         */

        /**
         * Constructs a new RoomItemMessage.
         * @memberof game
         * @classdesc Represents a RoomItemMessage.
         * @constructor
         * @param {game.RoomItemMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RoomItemMessage(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomItemMessage playerId.
         * @member {string} playerId
         * @memberof game.RoomItemMessage
         * @instance
         */
        RoomItemMessage.prototype.playerId = "";

        /**
         * RoomItemMessage type.
         * @member {string} type
         * @memberof game.RoomItemMessage
         * @instance
         */
        RoomItemMessage.prototype.type = "";

        /**
         * RoomItemMessage item.
         * @member {game.RoomItemData.$Properties|null|undefined} item
         * @memberof game.RoomItemMessage
         * @instance
         */
        RoomItemMessage.prototype.item = null;

        /**
         * RoomItemMessage items.
         * @member {Array.<game.RoomItemData.$Properties>} items
         * @memberof game.RoomItemMessage
         * @instance
         */
        RoomItemMessage.prototype.items = $util.emptyArray;

        /**
         * Creates a new RoomItemMessage instance using the specified properties.
         * @function create
         * @memberof game.RoomItemMessage
         * @static
         * @param {game.RoomItemMessage.$Properties=} [properties] Properties to set
         * @returns {game.RoomItemMessage} RoomItemMessage instance
         * @type {{
         *   (properties: game.RoomItemMessage.$Shape): game.RoomItemMessage & game.RoomItemMessage.$Shape;
         *   (properties?: game.RoomItemMessage.$Properties): game.RoomItemMessage;
         * }}
         */
        RoomItemMessage.create = function create(properties) {
            return new RoomItemMessage(properties);
        };

        /**
         * Encodes the specified RoomItemMessage message. Does not implicitly {@link game.RoomItemMessage.verify|verify} messages.
         * @function encode
         * @memberof game.RoomItemMessage
         * @static
         * @param {game.RoomItemMessage.$Properties} message RoomItemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItemMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.item != null && Object.hasOwnProperty.call(message, "item"))
                $root.game.RoomItemData.encode(message.item, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.game.RoomItemData.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomItemMessage message, length delimited. Does not implicitly {@link game.RoomItemMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RoomItemMessage
         * @static
         * @param {game.RoomItemMessage.$Properties} message RoomItemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItemMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RoomItemMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.RoomItemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RoomItemMessage & game.RoomItemMessage.$Shape} RoomItemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItemMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.item = $root.game.RoomItemData.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.game.RoomItemData.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomItemMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RoomItemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RoomItemMessage & game.RoomItemMessage.$Shape} RoomItemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItemMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomItemMessage message.
         * @function verify
         * @memberof game.RoomItemMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomItemMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                let error = $root.game.RoomItemData.verify(message.item, long + 1);
                if (error)
                    return "item." + error;
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.game.RoomItemData.verify(message.items[i], long + 1);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomItemMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RoomItemMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RoomItemMessage} RoomItemMessage
         */
        RoomItemMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.item != null) {
                if (typeof object.item !== "object")
                    throw TypeError(".game.RoomItemMessage.item: object expected");
                message.item = $root.game.RoomItemData.fromObject(object.item, long + 1);
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".game.RoomItemMessage.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".game.RoomItemMessage.items: object expected");
                    message.items[i] = $root.game.RoomItemData.fromObject(object.items[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomItemMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RoomItemMessage
         * @static
         * @param {game.RoomItemMessage} message RoomItemMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomItemMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.item = null;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.item != null && message.hasOwnProperty("item"))
                object.item = $root.game.RoomItemData.toObject(message.item, options, _depth + 1);
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.game.RoomItemData.toObject(message.items[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this RoomItemMessage to JSON.
         * @function toJSON
         * @memberof game.RoomItemMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomItemMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RoomItemMessage
         * @function getTypeUrl
         * @memberof game.RoomItemMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RoomItemMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RoomItemMessage";
        };

        return RoomItemMessage;
    })();

    game.TokenData = (function() {

        /**
         * Properties of a TokenData.
         * @typedef {Object} game.TokenData.$Properties
         * @property {string|null} [tokenId] TokenData tokenId
         * @property {string|null} [name] TokenData name
         * @property {number|null} [baseHp] TokenData baseHp
         * @property {string|null} [imageUrl] TokenData imageUrl
         * @property {number|null} [size] TokenData size
         * @property {string|null} [hpVisibility] TokenData hpVisibility
         * @property {boolean|null} [haveHp] TokenData haveHp
         * @property {number|null} [sightRadius] TokenData sightRadius
         * @property {string|null} [sightShape] TokenData sightShape
         * @property {number|null} [sightLength] TokenData sightLength
         * @property {number|null} [sightAngle] TokenData sightAngle
         * @property {boolean|null} [sightShowToAll] TokenData sightShowToAll
         * @property {number|null} [sightDirection] TokenData sightDirection
         * @property {string|null} [description] TokenData description
         * @property {string|null} [info] TokenData info
         * @property {string|null} [tokenVisibility] TokenData tokenVisibility
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a TokenData.
         * @memberof game
         * @interface ITokenData
         * @augments game.TokenData.$Properties
         * @deprecated Use game.TokenData.$Properties instead.
         */

        /**
         * Shape of a TokenData.
         * @typedef {game.TokenData.$Properties} game.TokenData.$Shape
         */

        /**
         * Constructs a new TokenData.
         * @memberof game
         * @classdesc Represents a TokenData.
         * @constructor
         * @param {game.TokenData.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function TokenData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenData tokenId.
         * @member {string} tokenId
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.tokenId = "";

        /**
         * TokenData name.
         * @member {string} name
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.name = "";

        /**
         * TokenData baseHp.
         * @member {number} baseHp
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.baseHp = 0;

        /**
         * TokenData imageUrl.
         * @member {string} imageUrl
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.imageUrl = "";

        /**
         * TokenData size.
         * @member {number} size
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.size = 0;

        /**
         * TokenData hpVisibility.
         * @member {string} hpVisibility
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.hpVisibility = "";

        /**
         * TokenData haveHp.
         * @member {boolean} haveHp
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.haveHp = false;

        /**
         * TokenData sightRadius.
         * @member {number} sightRadius
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightRadius = 0;

        /**
         * TokenData sightShape.
         * @member {string} sightShape
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightShape = "";

        /**
         * TokenData sightLength.
         * @member {number} sightLength
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightLength = 0;

        /**
         * TokenData sightAngle.
         * @member {number} sightAngle
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightAngle = 0;

        /**
         * TokenData sightShowToAll.
         * @member {boolean} sightShowToAll
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightShowToAll = false;

        /**
         * TokenData sightDirection.
         * @member {number} sightDirection
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.sightDirection = 0;

        /**
         * TokenData description.
         * @member {string} description
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.description = "";

        /**
         * TokenData info.
         * @member {string} info
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.info = "";

        /**
         * TokenData tokenVisibility.
         * @member {string} tokenVisibility
         * @memberof game.TokenData
         * @instance
         */
        TokenData.prototype.tokenVisibility = "";

        /**
         * Creates a new TokenData instance using the specified properties.
         * @function create
         * @memberof game.TokenData
         * @static
         * @param {game.TokenData.$Properties=} [properties] Properties to set
         * @returns {game.TokenData} TokenData instance
         * @type {{
         *   (properties: game.TokenData.$Shape): game.TokenData & game.TokenData.$Shape;
         *   (properties?: game.TokenData.$Properties): game.TokenData;
         * }}
         */
        TokenData.create = function create(properties) {
            return new TokenData(properties);
        };

        /**
         * Encodes the specified TokenData message. Does not implicitly {@link game.TokenData.verify|verify} messages.
         * @function encode
         * @memberof game.TokenData
         * @static
         * @param {game.TokenData.$Properties} message TokenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenData.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tokenId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.baseHp != null && Object.hasOwnProperty.call(message, "baseHp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.baseHp);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.imageUrl);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.size);
            if (message.hpVisibility != null && Object.hasOwnProperty.call(message, "hpVisibility"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.hpVisibility);
            if (message.haveHp != null && Object.hasOwnProperty.call(message, "haveHp"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.haveHp);
            if (message.sightRadius != null && Object.hasOwnProperty.call(message, "sightRadius"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sightRadius);
            if (message.sightShape != null && Object.hasOwnProperty.call(message, "sightShape"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.sightShape);
            if (message.sightLength != null && Object.hasOwnProperty.call(message, "sightLength"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.sightLength);
            if (message.sightAngle != null && Object.hasOwnProperty.call(message, "sightAngle"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.sightAngle);
            if (message.sightShowToAll != null && Object.hasOwnProperty.call(message, "sightShowToAll"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.sightShowToAll);
            if (message.sightDirection != null && Object.hasOwnProperty.call(message, "sightDirection"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.sightDirection);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.description);
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.info);
            if (message.tokenVisibility != null && Object.hasOwnProperty.call(message, "tokenVisibility"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.tokenVisibility);
            return writer;
        };

        /**
         * Encodes the specified TokenData message, length delimited. Does not implicitly {@link game.TokenData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TokenData
         * @static
         * @param {game.TokenData.$Properties} message TokenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a TokenData message from the specified reader or buffer.
         * @function decode
         * @memberof game.TokenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TokenData & game.TokenData.$Shape} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tokenId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.baseHp = reader.int32();
                        break;
                    }
                case 4: {
                        message.imageUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.size = reader.int32();
                        break;
                    }
                case 6: {
                        message.hpVisibility = reader.string();
                        break;
                    }
                case 7: {
                        message.haveHp = reader.bool();
                        break;
                    }
                case 8: {
                        message.sightRadius = reader.int32();
                        break;
                    }
                case 9: {
                        message.sightShape = reader.string();
                        break;
                    }
                case 10: {
                        message.sightLength = reader.int32();
                        break;
                    }
                case 11: {
                        message.sightAngle = reader.int32();
                        break;
                    }
                case 12: {
                        message.sightShowToAll = reader.bool();
                        break;
                    }
                case 13: {
                        message.sightDirection = reader.int32();
                        break;
                    }
                case 14: {
                        message.description = reader.string();
                        break;
                    }
                case 15: {
                        message.info = reader.string();
                        break;
                    }
                case 16: {
                        message.tokenVisibility = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TokenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TokenData & game.TokenData.$Shape} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenData message.
         * @function verify
         * @memberof game.TokenData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                if (!$util.isInteger(message.baseHp))
                    return "baseHp: integer expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.hpVisibility != null && message.hasOwnProperty("hpVisibility"))
                if (!$util.isString(message.hpVisibility))
                    return "hpVisibility: string expected";
            if (message.haveHp != null && message.hasOwnProperty("haveHp"))
                if (typeof message.haveHp !== "boolean")
                    return "haveHp: boolean expected";
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius"))
                if (!$util.isInteger(message.sightRadius))
                    return "sightRadius: integer expected";
            if (message.sightShape != null && message.hasOwnProperty("sightShape"))
                if (!$util.isString(message.sightShape))
                    return "sightShape: string expected";
            if (message.sightLength != null && message.hasOwnProperty("sightLength"))
                if (!$util.isInteger(message.sightLength))
                    return "sightLength: integer expected";
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle"))
                if (!$util.isInteger(message.sightAngle))
                    return "sightAngle: integer expected";
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll"))
                if (typeof message.sightShowToAll !== "boolean")
                    return "sightShowToAll: boolean expected";
            if (message.sightDirection != null && message.hasOwnProperty("sightDirection"))
                if (!$util.isInteger(message.sightDirection))
                    return "sightDirection: integer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            if (message.tokenVisibility != null && message.hasOwnProperty("tokenVisibility"))
                if (!$util.isString(message.tokenVisibility))
                    return "tokenVisibility: string expected";
            return null;
        };

        /**
         * Creates a TokenData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TokenData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TokenData} TokenData
         */
        TokenData.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.baseHp != null)
                message.baseHp = object.baseHp | 0;
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.size != null)
                message.size = object.size | 0;
            if (object.hpVisibility != null)
                message.hpVisibility = String(object.hpVisibility);
            if (object.haveHp != null)
                message.haveHp = Boolean(object.haveHp);
            if (object.sightRadius != null)
                message.sightRadius = object.sightRadius | 0;
            if (object.sightShape != null)
                message.sightShape = String(object.sightShape);
            if (object.sightLength != null)
                message.sightLength = object.sightLength | 0;
            if (object.sightAngle != null)
                message.sightAngle = object.sightAngle | 0;
            if (object.sightShowToAll != null)
                message.sightShowToAll = Boolean(object.sightShowToAll);
            if (object.sightDirection != null)
                message.sightDirection = object.sightDirection | 0;
            if (object.description != null)
                message.description = String(object.description);
            if (object.info != null)
                message.info = String(object.info);
            if (object.tokenVisibility != null)
                message.tokenVisibility = String(object.tokenVisibility);
            return message;
        };

        /**
         * Creates a plain object from a TokenData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TokenData
         * @static
         * @param {game.TokenData} message TokenData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenData.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.tokenId = "";
                object.name = "";
                object.baseHp = 0;
                object.imageUrl = "";
                object.size = 0;
                object.hpVisibility = "";
                object.haveHp = false;
                object.sightRadius = 0;
                object.sightShape = "";
                object.sightLength = 0;
                object.sightAngle = 0;
                object.sightShowToAll = false;
                object.sightDirection = 0;
                object.description = "";
                object.info = "";
                object.tokenVisibility = "";
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                object.baseHp = message.baseHp;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.hpVisibility != null && message.hasOwnProperty("hpVisibility"))
                object.hpVisibility = message.hpVisibility;
            if (message.haveHp != null && message.hasOwnProperty("haveHp"))
                object.haveHp = message.haveHp;
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius"))
                object.sightRadius = message.sightRadius;
            if (message.sightShape != null && message.hasOwnProperty("sightShape"))
                object.sightShape = message.sightShape;
            if (message.sightLength != null && message.hasOwnProperty("sightLength"))
                object.sightLength = message.sightLength;
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle"))
                object.sightAngle = message.sightAngle;
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll"))
                object.sightShowToAll = message.sightShowToAll;
            if (message.sightDirection != null && message.hasOwnProperty("sightDirection"))
                object.sightDirection = message.sightDirection;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.tokenVisibility != null && message.hasOwnProperty("tokenVisibility"))
                object.tokenVisibility = message.tokenVisibility;
            return object;
        };

        /**
         * Converts this TokenData to JSON.
         * @function toJSON
         * @memberof game.TokenData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for TokenData
         * @function getTypeUrl
         * @memberof game.TokenData
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TokenData.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.TokenData";
        };

        return TokenData;
    })();

    game.TokenMessage = (function() {

        /**
         * Properties of a TokenMessage.
         * @typedef {Object} game.TokenMessage.$Properties
         * @property {string|null} [playerId] TokenMessage playerId
         * @property {string|null} [type] TokenMessage type
         * @property {game.TokenData.$Properties|null} [tokenDef] TokenMessage tokenDef
         * @property {Array.<game.TokenData.$Properties>|null} [tokens] TokenMessage tokens
         * @property {string|null} [itemId] TokenMessage itemId
         * @property {number|null} [currentHp] TokenMessage currentHp
         * @property {number|null} [effectColor] TokenMessage effectColor
         * @property {number|null} [effectDuration] TokenMessage effectDuration
         * @property {number|null} [effectRadius] TokenMessage effectRadius
         * @property {number|null} [x] TokenMessage x
         * @property {number|null} [y] TokenMessage y
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a TokenMessage.
         * @memberof game
         * @interface ITokenMessage
         * @augments game.TokenMessage.$Properties
         * @deprecated Use game.TokenMessage.$Properties instead.
         */

        /**
         * Shape of a TokenMessage.
         * @typedef {game.TokenMessage.$Properties} game.TokenMessage.$Shape
         */

        /**
         * Constructs a new TokenMessage.
         * @memberof game
         * @classdesc Represents a TokenMessage.
         * @constructor
         * @param {game.TokenMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function TokenMessage(properties) {
            this.tokens = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenMessage playerId.
         * @member {string} playerId
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.playerId = "";

        /**
         * TokenMessage type.
         * @member {string} type
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.type = "";

        /**
         * TokenMessage tokenDef.
         * @member {game.TokenData.$Properties|null|undefined} tokenDef
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.tokenDef = null;

        /**
         * TokenMessage tokens.
         * @member {Array.<game.TokenData.$Properties>} tokens
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.tokens = $util.emptyArray;

        /**
         * TokenMessage itemId.
         * @member {string} itemId
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.itemId = "";

        /**
         * TokenMessage currentHp.
         * @member {number} currentHp
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.currentHp = 0;

        /**
         * TokenMessage effectColor.
         * @member {number} effectColor
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.effectColor = 0;

        /**
         * TokenMessage effectDuration.
         * @member {number} effectDuration
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.effectDuration = 0;

        /**
         * TokenMessage effectRadius.
         * @member {number} effectRadius
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.effectRadius = 0;

        /**
         * TokenMessage x.
         * @member {number} x
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.x = 0;

        /**
         * TokenMessage y.
         * @member {number} y
         * @memberof game.TokenMessage
         * @instance
         */
        TokenMessage.prototype.y = 0;

        /**
         * Creates a new TokenMessage instance using the specified properties.
         * @function create
         * @memberof game.TokenMessage
         * @static
         * @param {game.TokenMessage.$Properties=} [properties] Properties to set
         * @returns {game.TokenMessage} TokenMessage instance
         * @type {{
         *   (properties: game.TokenMessage.$Shape): game.TokenMessage & game.TokenMessage.$Shape;
         *   (properties?: game.TokenMessage.$Properties): game.TokenMessage;
         * }}
         */
        TokenMessage.create = function create(properties) {
            return new TokenMessage(properties);
        };

        /**
         * Encodes the specified TokenMessage message. Does not implicitly {@link game.TokenMessage.verify|verify} messages.
         * @function encode
         * @memberof game.TokenMessage
         * @static
         * @param {game.TokenMessage.$Properties} message TokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.tokenDef != null && Object.hasOwnProperty.call(message, "tokenDef"))
                $root.game.TokenData.encode(message.tokenDef, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.tokens != null && message.tokens.length)
                for (let i = 0; i < message.tokens.length; ++i)
                    $root.game.TokenData.encode(message.tokens[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.itemId);
            if (message.currentHp != null && Object.hasOwnProperty.call(message, "currentHp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.currentHp);
            if (message.effectColor != null && Object.hasOwnProperty.call(message, "effectColor"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.effectColor);
            if (message.effectDuration != null && Object.hasOwnProperty.call(message, "effectDuration"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.effectDuration);
            if (message.effectRadius != null && Object.hasOwnProperty.call(message, "effectRadius"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.effectRadius);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified TokenMessage message, length delimited. Does not implicitly {@link game.TokenMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TokenMessage
         * @static
         * @param {game.TokenMessage.$Properties} message TokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a TokenMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.TokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TokenMessage & game.TokenMessage.$Shape} TokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.tokenDef = $root.game.TokenData.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        if (!(message.tokens && message.tokens.length))
                            message.tokens = [];
                        message.tokens.push($root.game.TokenData.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 5: {
                        message.itemId = reader.string();
                        break;
                    }
                case 6: {
                        message.currentHp = reader.int32();
                        break;
                    }
                case 7: {
                        message.effectColor = reader.int32();
                        break;
                    }
                case 8: {
                        message.effectDuration = reader.int32();
                        break;
                    }
                case 9: {
                        message.effectRadius = reader.int32();
                        break;
                    }
                case 10: {
                        message.x = reader.double();
                        break;
                    }
                case 11: {
                        message.y = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TokenMessage & game.TokenMessage.$Shape} TokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenMessage message.
         * @function verify
         * @memberof game.TokenMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.tokenDef != null && message.hasOwnProperty("tokenDef")) {
                let error = $root.game.TokenData.verify(message.tokenDef, long + 1);
                if (error)
                    return "tokenDef." + error;
            }
            if (message.tokens != null && message.hasOwnProperty("tokens")) {
                if (!Array.isArray(message.tokens))
                    return "tokens: array expected";
                for (let i = 0; i < message.tokens.length; ++i) {
                    let error = $root.game.TokenData.verify(message.tokens[i], long + 1);
                    if (error)
                        return "tokens." + error;
                }
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.currentHp != null && message.hasOwnProperty("currentHp"))
                if (!$util.isInteger(message.currentHp))
                    return "currentHp: integer expected";
            if (message.effectColor != null && message.hasOwnProperty("effectColor"))
                if (!$util.isInteger(message.effectColor))
                    return "effectColor: integer expected";
            if (message.effectDuration != null && message.hasOwnProperty("effectDuration"))
                if (!$util.isInteger(message.effectDuration))
                    return "effectDuration: integer expected";
            if (message.effectRadius != null && message.hasOwnProperty("effectRadius"))
                if (!$util.isInteger(message.effectRadius))
                    return "effectRadius: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a TokenMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TokenMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TokenMessage} TokenMessage
         */
        TokenMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.tokenDef != null) {
                if (typeof object.tokenDef !== "object")
                    throw TypeError(".game.TokenMessage.tokenDef: object expected");
                message.tokenDef = $root.game.TokenData.fromObject(object.tokenDef, long + 1);
            }
            if (object.tokens) {
                if (!Array.isArray(object.tokens))
                    throw TypeError(".game.TokenMessage.tokens: array expected");
                message.tokens = [];
                for (let i = 0; i < object.tokens.length; ++i) {
                    if (typeof object.tokens[i] !== "object")
                        throw TypeError(".game.TokenMessage.tokens: object expected");
                    message.tokens[i] = $root.game.TokenData.fromObject(object.tokens[i], long + 1);
                }
            }
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.currentHp != null)
                message.currentHp = object.currentHp | 0;
            if (object.effectColor != null)
                message.effectColor = object.effectColor | 0;
            if (object.effectDuration != null)
                message.effectDuration = object.effectDuration | 0;
            if (object.effectRadius != null)
                message.effectRadius = object.effectRadius | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a TokenMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TokenMessage
         * @static
         * @param {game.TokenMessage} message TokenMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.tokens = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.tokenDef = null;
                object.itemId = "";
                object.currentHp = 0;
                object.effectColor = 0;
                object.effectDuration = 0;
                object.effectRadius = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.tokenDef != null && message.hasOwnProperty("tokenDef"))
                object.tokenDef = $root.game.TokenData.toObject(message.tokenDef, options, _depth + 1);
            if (message.tokens && message.tokens.length) {
                object.tokens = [];
                for (let j = 0; j < message.tokens.length; ++j)
                    object.tokens[j] = $root.game.TokenData.toObject(message.tokens[j], options, _depth + 1);
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.currentHp != null && message.hasOwnProperty("currentHp"))
                object.currentHp = message.currentHp;
            if (message.effectColor != null && message.hasOwnProperty("effectColor"))
                object.effectColor = message.effectColor;
            if (message.effectDuration != null && message.hasOwnProperty("effectDuration"))
                object.effectDuration = message.effectDuration;
            if (message.effectRadius != null && message.hasOwnProperty("effectRadius"))
                object.effectRadius = message.effectRadius;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this TokenMessage to JSON.
         * @function toJSON
         * @memberof game.TokenMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for TokenMessage
         * @function getTypeUrl
         * @memberof game.TokenMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TokenMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.TokenMessage";
        };

        return TokenMessage;
    })();

    game.ChatMessage = (function() {

        /**
         * Properties of a ChatMessage.
         * @typedef {Object} game.ChatMessage.$Properties
         * @property {string|null} [playerId] ChatMessage playerId
         * @property {string|null} [playerName] ChatMessage playerName
         * @property {string|null} [text] ChatMessage text
         * @property {string|null} [targetPlayerId] ChatMessage targetPlayerId
         * @property {string|null} [targetPlayerName] ChatMessage targetPlayerName
         * @property {string|null} [messageId] ChatMessage messageId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ChatMessage.
         * @memberof game
         * @interface IChatMessage
         * @augments game.ChatMessage.$Properties
         * @deprecated Use game.ChatMessage.$Properties instead.
         */

        /**
         * Shape of a ChatMessage.
         * @typedef {game.ChatMessage.$Properties} game.ChatMessage.$Shape
         */

        /**
         * Constructs a new ChatMessage.
         * @memberof game
         * @classdesc Represents a ChatMessage.
         * @constructor
         * @param {game.ChatMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ChatMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessage playerId.
         * @member {string} playerId
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.playerId = "";

        /**
         * ChatMessage playerName.
         * @member {string} playerName
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.playerName = "";

        /**
         * ChatMessage text.
         * @member {string} text
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.text = "";

        /**
         * ChatMessage targetPlayerId.
         * @member {string} targetPlayerId
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.targetPlayerId = "";

        /**
         * ChatMessage targetPlayerName.
         * @member {string} targetPlayerName
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.targetPlayerName = "";

        /**
         * ChatMessage messageId.
         * @member {string} messageId
         * @memberof game.ChatMessage
         * @instance
         */
        ChatMessage.prototype.messageId = "";

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof game.ChatMessage
         * @static
         * @param {game.ChatMessage.$Properties=} [properties] Properties to set
         * @returns {game.ChatMessage} ChatMessage instance
         * @type {{
         *   (properties: game.ChatMessage.$Shape): game.ChatMessage & game.ChatMessage.$Shape;
         *   (properties?: game.ChatMessage.$Properties): game.ChatMessage;
         * }}
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link game.ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof game.ChatMessage
         * @static
         * @param {game.ChatMessage.$Properties} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.targetPlayerId != null && Object.hasOwnProperty.call(message, "targetPlayerId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.targetPlayerId);
            if (message.targetPlayerName != null && Object.hasOwnProperty.call(message, "targetPlayerName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.targetPlayerName);
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.messageId);
            return writer;
        };

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link game.ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ChatMessage
         * @static
         * @param {game.ChatMessage.$Properties} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ChatMessage & game.ChatMessage.$Shape} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.text = reader.string();
                        break;
                    }
                case 4: {
                        message.targetPlayerId = reader.string();
                        break;
                    }
                case 5: {
                        message.targetPlayerName = reader.string();
                        break;
                    }
                case 6: {
                        message.messageId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ChatMessage & game.ChatMessage.$Shape} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof game.ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                if (!$util.isString(message.targetPlayerId))
                    return "targetPlayerId: string expected";
            if (message.targetPlayerName != null && message.hasOwnProperty("targetPlayerName"))
                if (!$util.isString(message.targetPlayerName))
                    return "targetPlayerName: string expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            return null;
        };

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.text != null)
                message.text = String(object.text);
            if (object.targetPlayerId != null)
                message.targetPlayerId = String(object.targetPlayerId);
            if (object.targetPlayerName != null)
                message.targetPlayerName = String(object.targetPlayerName);
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ChatMessage
         * @static
         * @param {game.ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.text = "";
                object.targetPlayerId = "";
                object.targetPlayerName = "";
                object.messageId = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                object.targetPlayerId = message.targetPlayerId;
            if (message.targetPlayerName != null && message.hasOwnProperty("targetPlayerName"))
                object.targetPlayerName = message.targetPlayerName;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            return object;
        };

        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof game.ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatMessage
         * @function getTypeUrl
         * @memberof game.ChatMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ChatMessage";
        };

        return ChatMessage;
    })();

    game.ChatUnreadEntry = (function() {

        /**
         * Properties of a ChatUnreadEntry.
         * @typedef {Object} game.ChatUnreadEntry.$Properties
         * @property {string|null} [channel] ChatUnreadEntry channel
         * @property {number|null} [count] ChatUnreadEntry count
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ChatUnreadEntry.
         * @memberof game
         * @interface IChatUnreadEntry
         * @augments game.ChatUnreadEntry.$Properties
         * @deprecated Use game.ChatUnreadEntry.$Properties instead.
         */

        /**
         * Shape of a ChatUnreadEntry.
         * @typedef {game.ChatUnreadEntry.$Properties} game.ChatUnreadEntry.$Shape
         */

        /**
         * Constructs a new ChatUnreadEntry.
         * @memberof game
         * @classdesc Represents a ChatUnreadEntry.
         * @constructor
         * @param {game.ChatUnreadEntry.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ChatUnreadEntry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatUnreadEntry channel.
         * @member {string} channel
         * @memberof game.ChatUnreadEntry
         * @instance
         */
        ChatUnreadEntry.prototype.channel = "";

        /**
         * ChatUnreadEntry count.
         * @member {number} count
         * @memberof game.ChatUnreadEntry
         * @instance
         */
        ChatUnreadEntry.prototype.count = 0;

        /**
         * Creates a new ChatUnreadEntry instance using the specified properties.
         * @function create
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {game.ChatUnreadEntry.$Properties=} [properties] Properties to set
         * @returns {game.ChatUnreadEntry} ChatUnreadEntry instance
         * @type {{
         *   (properties: game.ChatUnreadEntry.$Shape): game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape;
         *   (properties?: game.ChatUnreadEntry.$Properties): game.ChatUnreadEntry;
         * }}
         */
        ChatUnreadEntry.create = function create(properties) {
            return new ChatUnreadEntry(properties);
        };

        /**
         * Encodes the specified ChatUnreadEntry message. Does not implicitly {@link game.ChatUnreadEntry.verify|verify} messages.
         * @function encode
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {game.ChatUnreadEntry.$Properties} message ChatUnreadEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatUnreadEntry.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified ChatUnreadEntry message, length delimited. Does not implicitly {@link game.ChatUnreadEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {game.ChatUnreadEntry.$Properties} message ChatUnreadEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatUnreadEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatUnreadEntry message from the specified reader or buffer.
         * @function decode
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape} ChatUnreadEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatUnreadEntry.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channel = reader.string();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatUnreadEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ChatUnreadEntry & game.ChatUnreadEntry.$Shape} ChatUnreadEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatUnreadEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatUnreadEntry message.
         * @function verify
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatUnreadEntry.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a ChatUnreadEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ChatUnreadEntry} ChatUnreadEntry
         */
        ChatUnreadEntry.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChatUnreadEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {game.ChatUnreadEntry} message ChatUnreadEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatUnreadEntry.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.channel = "";
                object.count = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this ChatUnreadEntry to JSON.
         * @function toJSON
         * @memberof game.ChatUnreadEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatUnreadEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatUnreadEntry
         * @function getTypeUrl
         * @memberof game.ChatUnreadEntry
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatUnreadEntry.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ChatUnreadEntry";
        };

        return ChatUnreadEntry;
    })();

    game.ChatReadSync = (function() {

        /**
         * Properties of a ChatReadSync.
         * @typedef {Object} game.ChatReadSync.$Properties
         * @property {Array.<game.ChatUnreadEntry.$Properties>|null} [unreads] ChatReadSync unreads
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ChatReadSync.
         * @memberof game
         * @interface IChatReadSync
         * @augments game.ChatReadSync.$Properties
         * @deprecated Use game.ChatReadSync.$Properties instead.
         */

        /**
         * Shape of a ChatReadSync.
         * @typedef {game.ChatReadSync.$Properties} game.ChatReadSync.$Shape
         */

        /**
         * Constructs a new ChatReadSync.
         * @memberof game
         * @classdesc Represents a ChatReadSync.
         * @constructor
         * @param {game.ChatReadSync.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ChatReadSync(properties) {
            this.unreads = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatReadSync unreads.
         * @member {Array.<game.ChatUnreadEntry.$Properties>} unreads
         * @memberof game.ChatReadSync
         * @instance
         */
        ChatReadSync.prototype.unreads = $util.emptyArray;

        /**
         * Creates a new ChatReadSync instance using the specified properties.
         * @function create
         * @memberof game.ChatReadSync
         * @static
         * @param {game.ChatReadSync.$Properties=} [properties] Properties to set
         * @returns {game.ChatReadSync} ChatReadSync instance
         * @type {{
         *   (properties: game.ChatReadSync.$Shape): game.ChatReadSync & game.ChatReadSync.$Shape;
         *   (properties?: game.ChatReadSync.$Properties): game.ChatReadSync;
         * }}
         */
        ChatReadSync.create = function create(properties) {
            return new ChatReadSync(properties);
        };

        /**
         * Encodes the specified ChatReadSync message. Does not implicitly {@link game.ChatReadSync.verify|verify} messages.
         * @function encode
         * @memberof game.ChatReadSync
         * @static
         * @param {game.ChatReadSync.$Properties} message ChatReadSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReadSync.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.unreads != null && message.unreads.length)
                for (let i = 0; i < message.unreads.length; ++i)
                    $root.game.ChatUnreadEntry.encode(message.unreads[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatReadSync message, length delimited. Does not implicitly {@link game.ChatReadSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ChatReadSync
         * @static
         * @param {game.ChatReadSync.$Properties} message ChatReadSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatReadSync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatReadSync message from the specified reader or buffer.
         * @function decode
         * @memberof game.ChatReadSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ChatReadSync & game.ChatReadSync.$Shape} ChatReadSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReadSync.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.unreads && message.unreads.length))
                            message.unreads = [];
                        message.unreads.push($root.game.ChatUnreadEntry.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatReadSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ChatReadSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ChatReadSync & game.ChatReadSync.$Shape} ChatReadSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatReadSync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatReadSync message.
         * @function verify
         * @memberof game.ChatReadSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatReadSync.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.unreads != null && message.hasOwnProperty("unreads")) {
                if (!Array.isArray(message.unreads))
                    return "unreads: array expected";
                for (let i = 0; i < message.unreads.length; ++i) {
                    let error = $root.game.ChatUnreadEntry.verify(message.unreads[i], long + 1);
                    if (error)
                        return "unreads." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChatReadSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ChatReadSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ChatReadSync} ChatReadSync
         */
        ChatReadSync.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.unreads) {
                if (!Array.isArray(object.unreads))
                    throw TypeError(".game.ChatReadSync.unreads: array expected");
                message.unreads = [];
                for (let i = 0; i < object.unreads.length; ++i) {
                    if (typeof object.unreads[i] !== "object")
                        throw TypeError(".game.ChatReadSync.unreads: object expected");
                    message.unreads[i] = $root.game.ChatUnreadEntry.fromObject(object.unreads[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatReadSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ChatReadSync
         * @static
         * @param {game.ChatReadSync} message ChatReadSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatReadSync.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.unreads = [];
            if (message.unreads && message.unreads.length) {
                object.unreads = [];
                for (let j = 0; j < message.unreads.length; ++j)
                    object.unreads[j] = $root.game.ChatUnreadEntry.toObject(message.unreads[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this ChatReadSync to JSON.
         * @function toJSON
         * @memberof game.ChatReadSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatReadSync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatReadSync
         * @function getTypeUrl
         * @memberof game.ChatReadSync
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatReadSync.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ChatReadSync";
        };

        return ChatReadSync;
    })();

    game.ChatMarkRead = (function() {

        /**
         * Properties of a ChatMarkRead.
         * @typedef {Object} game.ChatMarkRead.$Properties
         * @property {string|null} [channel] ChatMarkRead channel
         * @property {string|null} [lastReadMessageId] ChatMarkRead lastReadMessageId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ChatMarkRead.
         * @memberof game
         * @interface IChatMarkRead
         * @augments game.ChatMarkRead.$Properties
         * @deprecated Use game.ChatMarkRead.$Properties instead.
         */

        /**
         * Shape of a ChatMarkRead.
         * @typedef {game.ChatMarkRead.$Properties} game.ChatMarkRead.$Shape
         */

        /**
         * Constructs a new ChatMarkRead.
         * @memberof game
         * @classdesc Represents a ChatMarkRead.
         * @constructor
         * @param {game.ChatMarkRead.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ChatMarkRead(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMarkRead channel.
         * @member {string} channel
         * @memberof game.ChatMarkRead
         * @instance
         */
        ChatMarkRead.prototype.channel = "";

        /**
         * ChatMarkRead lastReadMessageId.
         * @member {string} lastReadMessageId
         * @memberof game.ChatMarkRead
         * @instance
         */
        ChatMarkRead.prototype.lastReadMessageId = "";

        /**
         * Creates a new ChatMarkRead instance using the specified properties.
         * @function create
         * @memberof game.ChatMarkRead
         * @static
         * @param {game.ChatMarkRead.$Properties=} [properties] Properties to set
         * @returns {game.ChatMarkRead} ChatMarkRead instance
         * @type {{
         *   (properties: game.ChatMarkRead.$Shape): game.ChatMarkRead & game.ChatMarkRead.$Shape;
         *   (properties?: game.ChatMarkRead.$Properties): game.ChatMarkRead;
         * }}
         */
        ChatMarkRead.create = function create(properties) {
            return new ChatMarkRead(properties);
        };

        /**
         * Encodes the specified ChatMarkRead message. Does not implicitly {@link game.ChatMarkRead.verify|verify} messages.
         * @function encode
         * @memberof game.ChatMarkRead
         * @static
         * @param {game.ChatMarkRead.$Properties} message ChatMarkRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMarkRead.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
            if (message.lastReadMessageId != null && Object.hasOwnProperty.call(message, "lastReadMessageId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastReadMessageId);
            return writer;
        };

        /**
         * Encodes the specified ChatMarkRead message, length delimited. Does not implicitly {@link game.ChatMarkRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ChatMarkRead
         * @static
         * @param {game.ChatMarkRead.$Properties} message ChatMarkRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMarkRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatMarkRead message from the specified reader or buffer.
         * @function decode
         * @memberof game.ChatMarkRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ChatMarkRead & game.ChatMarkRead.$Shape} ChatMarkRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMarkRead.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channel = reader.string();
                        break;
                    }
                case 2: {
                        message.lastReadMessageId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMarkRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ChatMarkRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ChatMarkRead & game.ChatMarkRead.$Shape} ChatMarkRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMarkRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMarkRead message.
         * @function verify
         * @memberof game.ChatMarkRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMarkRead.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.lastReadMessageId != null && message.hasOwnProperty("lastReadMessageId"))
                if (!$util.isString(message.lastReadMessageId))
                    return "lastReadMessageId: string expected";
            return null;
        };

        /**
         * Creates a ChatMarkRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ChatMarkRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ChatMarkRead} ChatMarkRead
         */
        ChatMarkRead.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.lastReadMessageId != null)
                message.lastReadMessageId = String(object.lastReadMessageId);
            return message;
        };

        /**
         * Creates a plain object from a ChatMarkRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ChatMarkRead
         * @static
         * @param {game.ChatMarkRead} message ChatMarkRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMarkRead.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.channel = "";
                object.lastReadMessageId = "";
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.lastReadMessageId != null && message.hasOwnProperty("lastReadMessageId"))
                object.lastReadMessageId = message.lastReadMessageId;
            return object;
        };

        /**
         * Converts this ChatMarkRead to JSON.
         * @function toJSON
         * @memberof game.ChatMarkRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMarkRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatMarkRead
         * @function getTypeUrl
         * @memberof game.ChatMarkRead
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatMarkRead.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.ChatMarkRead";
        };

        return ChatMarkRead;
    })();

    game.PlayerAction = (function() {

        /**
         * Properties of a PlayerAction.
         * @typedef {Object} game.PlayerAction.$Properties
         * @property {string|null} [playerId] PlayerAction playerId
         * @property {string|null} [type] PlayerAction type
         * @property {number|null} [x] PlayerAction x
         * @property {number|null} [y] PlayerAction y
         * @property {string|null} [anim] PlayerAction anim
         * @property {boolean|null} [flipX] PlayerAction flipX
         * @property {string|null} [name] PlayerAction name
         * @property {string|null} [photoUrl] PlayerAction photoUrl
         * @property {string|null} [description] PlayerAction description
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerAction.
         * @memberof game
         * @interface IPlayerAction
         * @augments game.PlayerAction.$Properties
         * @deprecated Use game.PlayerAction.$Properties instead.
         */

        /**
         * Shape of a PlayerAction.
         * @typedef {game.PlayerAction.$Properties} game.PlayerAction.$Shape
         */

        /**
         * Constructs a new PlayerAction.
         * @memberof game
         * @classdesc Represents a PlayerAction.
         * @constructor
         * @param {game.PlayerAction.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerAction playerId.
         * @member {string} playerId
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.playerId = "";

        /**
         * PlayerAction type.
         * @member {string} type
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.type = "";

        /**
         * PlayerAction x.
         * @member {number} x
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.x = 0;

        /**
         * PlayerAction y.
         * @member {number} y
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.y = 0;

        /**
         * PlayerAction anim.
         * @member {string} anim
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.anim = "";

        /**
         * PlayerAction flipX.
         * @member {boolean} flipX
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.flipX = false;

        /**
         * PlayerAction name.
         * @member {string} name
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.name = "";

        /**
         * PlayerAction photoUrl.
         * @member {string} photoUrl
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.photoUrl = "";

        /**
         * PlayerAction description.
         * @member {string} description
         * @memberof game.PlayerAction
         * @instance
         */
        PlayerAction.prototype.description = "";

        /**
         * Creates a new PlayerAction instance using the specified properties.
         * @function create
         * @memberof game.PlayerAction
         * @static
         * @param {game.PlayerAction.$Properties=} [properties] Properties to set
         * @returns {game.PlayerAction} PlayerAction instance
         * @type {{
         *   (properties: game.PlayerAction.$Shape): game.PlayerAction & game.PlayerAction.$Shape;
         *   (properties?: game.PlayerAction.$Properties): game.PlayerAction;
         * }}
         */
        PlayerAction.create = function create(properties) {
            return new PlayerAction(properties);
        };

        /**
         * Encodes the specified PlayerAction message. Does not implicitly {@link game.PlayerAction.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerAction
         * @static
         * @param {game.PlayerAction.$Properties} message PlayerAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAction.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
            if (message.anim != null && Object.hasOwnProperty.call(message, "anim"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.anim);
            if (message.flipX != null && Object.hasOwnProperty.call(message, "flipX"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.flipX);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
            if (message.photoUrl != null && Object.hasOwnProperty.call(message, "photoUrl"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.photoUrl);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified PlayerAction message, length delimited. Does not implicitly {@link game.PlayerAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerAction
         * @static
         * @param {game.PlayerAction.$Properties} message PlayerAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerAction message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerAction & game.PlayerAction.$Shape} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAction.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.x = reader.float();
                        break;
                    }
                case 4: {
                        message.y = reader.float();
                        break;
                    }
                case 5: {
                        message.anim = reader.string();
                        break;
                    }
                case 6: {
                        message.flipX = reader.bool();
                        break;
                    }
                case 7: {
                        message.name = reader.string();
                        break;
                    }
                case 8: {
                        message.photoUrl = reader.string();
                        break;
                    }
                case 9: {
                        message.description = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerAction & game.PlayerAction.$Shape} PlayerAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerAction message.
         * @function verify
         * @memberof game.PlayerAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerAction.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.anim != null && message.hasOwnProperty("anim"))
                if (!$util.isString(message.anim))
                    return "anim: string expected";
            if (message.flipX != null && message.hasOwnProperty("flipX"))
                if (typeof message.flipX !== "boolean")
                    return "flipX: boolean expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.photoUrl != null && message.hasOwnProperty("photoUrl"))
                if (!$util.isString(message.photoUrl))
                    return "photoUrl: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a PlayerAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerAction} PlayerAction
         */
        PlayerAction.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.anim != null)
                message.anim = String(object.anim);
            if (object.flipX != null)
                message.flipX = Boolean(object.flipX);
            if (object.name != null)
                message.name = String(object.name);
            if (object.photoUrl != null)
                message.photoUrl = String(object.photoUrl);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a PlayerAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerAction
         * @static
         * @param {game.PlayerAction} message PlayerAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerAction.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.x = 0;
                object.y = 0;
                object.anim = "";
                object.flipX = false;
                object.name = "";
                object.photoUrl = "";
                object.description = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.anim != null && message.hasOwnProperty("anim"))
                object.anim = message.anim;
            if (message.flipX != null && message.hasOwnProperty("flipX"))
                object.flipX = message.flipX;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.photoUrl != null && message.hasOwnProperty("photoUrl"))
                object.photoUrl = message.photoUrl;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this PlayerAction to JSON.
         * @function toJSON
         * @memberof game.PlayerAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerAction
         * @function getTypeUrl
         * @memberof game.PlayerAction
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerAction.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerAction";
        };

        return PlayerAction;
    })();

    game.UserInfoBar = (function() {

        /**
         * Properties of a UserInfoBar.
         * @typedef {Object} game.UserInfoBar.$Properties
         * @property {string|null} [barId] UserInfoBar barId
         * @property {string|null} [barName] UserInfoBar barName
         * @property {string|null} [color] UserInfoBar color
         * @property {string|null} [showTo] UserInfoBar showTo
         * @property {number|null} [currentValue] UserInfoBar currentValue
         * @property {number|null} [maxValue] UserInfoBar maxValue
         * @property {string|null} [statKey] UserInfoBar statKey
         * @property {string|null} [statRole] UserInfoBar statRole
         * @property {string|null} [statKind] UserInfoBar statKind
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a UserInfoBar.
         * @memberof game
         * @interface IUserInfoBar
         * @augments game.UserInfoBar.$Properties
         * @deprecated Use game.UserInfoBar.$Properties instead.
         */

        /**
         * Shape of a UserInfoBar.
         * @typedef {game.UserInfoBar.$Properties} game.UserInfoBar.$Shape
         */

        /**
         * Constructs a new UserInfoBar.
         * @memberof game
         * @classdesc Represents a UserInfoBar.
         * @constructor
         * @param {game.UserInfoBar.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function UserInfoBar(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoBar barId.
         * @member {string} barId
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.barId = "";

        /**
         * UserInfoBar barName.
         * @member {string} barName
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.barName = "";

        /**
         * UserInfoBar color.
         * @member {string} color
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.color = "";

        /**
         * UserInfoBar showTo.
         * @member {string} showTo
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.showTo = "";

        /**
         * UserInfoBar currentValue.
         * @member {number} currentValue
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.currentValue = 0;

        /**
         * UserInfoBar maxValue.
         * @member {number} maxValue
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.maxValue = 0;

        /**
         * UserInfoBar statKey.
         * @member {string} statKey
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.statKey = "";

        /**
         * UserInfoBar statRole.
         * @member {string} statRole
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.statRole = "";

        /**
         * UserInfoBar statKind.
         * @member {string} statKind
         * @memberof game.UserInfoBar
         * @instance
         */
        UserInfoBar.prototype.statKind = "";

        /**
         * Creates a new UserInfoBar instance using the specified properties.
         * @function create
         * @memberof game.UserInfoBar
         * @static
         * @param {game.UserInfoBar.$Properties=} [properties] Properties to set
         * @returns {game.UserInfoBar} UserInfoBar instance
         * @type {{
         *   (properties: game.UserInfoBar.$Shape): game.UserInfoBar & game.UserInfoBar.$Shape;
         *   (properties?: game.UserInfoBar.$Properties): game.UserInfoBar;
         * }}
         */
        UserInfoBar.create = function create(properties) {
            return new UserInfoBar(properties);
        };

        /**
         * Encodes the specified UserInfoBar message. Does not implicitly {@link game.UserInfoBar.verify|verify} messages.
         * @function encode
         * @memberof game.UserInfoBar
         * @static
         * @param {game.UserInfoBar.$Properties} message UserInfoBar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoBar.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.barId != null && Object.hasOwnProperty.call(message, "barId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.barId);
            if (message.barName != null && Object.hasOwnProperty.call(message, "barName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.barName);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
            if (message.showTo != null && Object.hasOwnProperty.call(message, "showTo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.showTo);
            if (message.currentValue != null && Object.hasOwnProperty.call(message, "currentValue"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currentValue);
            if (message.maxValue != null && Object.hasOwnProperty.call(message, "maxValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxValue);
            if (message.statKey != null && Object.hasOwnProperty.call(message, "statKey"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.statKey);
            if (message.statRole != null && Object.hasOwnProperty.call(message, "statRole"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.statRole);
            if (message.statKind != null && Object.hasOwnProperty.call(message, "statKind"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.statKind);
            return writer;
        };

        /**
         * Encodes the specified UserInfoBar message, length delimited. Does not implicitly {@link game.UserInfoBar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserInfoBar
         * @static
         * @param {game.UserInfoBar.$Properties} message UserInfoBar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoBar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a UserInfoBar message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserInfoBar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserInfoBar & game.UserInfoBar.$Shape} UserInfoBar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoBar.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.barId = reader.string();
                        break;
                    }
                case 2: {
                        message.barName = reader.string();
                        break;
                    }
                case 3: {
                        message.color = reader.string();
                        break;
                    }
                case 4: {
                        message.showTo = reader.string();
                        break;
                    }
                case 5: {
                        message.currentValue = reader.int32();
                        break;
                    }
                case 6: {
                        message.maxValue = reader.int32();
                        break;
                    }
                case 7: {
                        message.statKey = reader.string();
                        break;
                    }
                case 8: {
                        message.statRole = reader.string();
                        break;
                    }
                case 9: {
                        message.statKind = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoBar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserInfoBar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserInfoBar & game.UserInfoBar.$Shape} UserInfoBar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoBar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoBar message.
         * @function verify
         * @memberof game.UserInfoBar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoBar.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.barId != null && message.hasOwnProperty("barId"))
                if (!$util.isString(message.barId))
                    return "barId: string expected";
            if (message.barName != null && message.hasOwnProperty("barName"))
                if (!$util.isString(message.barName))
                    return "barName: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.showTo != null && message.hasOwnProperty("showTo"))
                if (!$util.isString(message.showTo))
                    return "showTo: string expected";
            if (message.currentValue != null && message.hasOwnProperty("currentValue"))
                if (!$util.isInteger(message.currentValue))
                    return "currentValue: integer expected";
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                if (!$util.isInteger(message.maxValue))
                    return "maxValue: integer expected";
            if (message.statKey != null && message.hasOwnProperty("statKey"))
                if (!$util.isString(message.statKey))
                    return "statKey: string expected";
            if (message.statRole != null && message.hasOwnProperty("statRole"))
                if (!$util.isString(message.statRole))
                    return "statRole: string expected";
            if (message.statKind != null && message.hasOwnProperty("statKind"))
                if (!$util.isString(message.statKind))
                    return "statKind: string expected";
            return null;
        };

        /**
         * Creates a UserInfoBar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserInfoBar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserInfoBar} UserInfoBar
         */
        UserInfoBar.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.barId != null)
                message.barId = String(object.barId);
            if (object.barName != null)
                message.barName = String(object.barName);
            if (object.color != null)
                message.color = String(object.color);
            if (object.showTo != null)
                message.showTo = String(object.showTo);
            if (object.currentValue != null)
                message.currentValue = object.currentValue | 0;
            if (object.maxValue != null)
                message.maxValue = object.maxValue | 0;
            if (object.statKey != null)
                message.statKey = String(object.statKey);
            if (object.statRole != null)
                message.statRole = String(object.statRole);
            if (object.statKind != null)
                message.statKind = String(object.statKind);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoBar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserInfoBar
         * @static
         * @param {game.UserInfoBar} message UserInfoBar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoBar.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.barId = "";
                object.barName = "";
                object.color = "";
                object.showTo = "";
                object.currentValue = 0;
                object.maxValue = 0;
                object.statKey = "";
                object.statRole = "";
                object.statKind = "";
            }
            if (message.barId != null && message.hasOwnProperty("barId"))
                object.barId = message.barId;
            if (message.barName != null && message.hasOwnProperty("barName"))
                object.barName = message.barName;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.showTo != null && message.hasOwnProperty("showTo"))
                object.showTo = message.showTo;
            if (message.currentValue != null && message.hasOwnProperty("currentValue"))
                object.currentValue = message.currentValue;
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                object.maxValue = message.maxValue;
            if (message.statKey != null && message.hasOwnProperty("statKey"))
                object.statKey = message.statKey;
            if (message.statRole != null && message.hasOwnProperty("statRole"))
                object.statRole = message.statRole;
            if (message.statKind != null && message.hasOwnProperty("statKind"))
                object.statKind = message.statKind;
            return object;
        };

        /**
         * Converts this UserInfoBar to JSON.
         * @function toJSON
         * @memberof game.UserInfoBar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoBar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserInfoBar
         * @function getTypeUrl
         * @memberof game.UserInfoBar
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserInfoBar.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UserInfoBar";
        };

        return UserInfoBar;
    })();

    game.UserInfoPayload = (function() {

        /**
         * Properties of a UserInfoPayload.
         * @typedef {Object} game.UserInfoPayload.$Properties
         * @property {string|null} [targetUserId] UserInfoPayload targetUserId
         * @property {string|null} [scopeType] UserInfoPayload scopeType
         * @property {Array.<game.UserInfoBar.$Properties>|null} [bars] UserInfoPayload bars
         * @property {boolean|null} [canEditDescription] UserInfoPayload canEditDescription
         * @property {boolean|null} [canEditBars] UserInfoPayload canEditBars
         * @property {string|null} [infoText] UserInfoPayload infoText
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a UserInfoPayload.
         * @memberof game
         * @interface IUserInfoPayload
         * @augments game.UserInfoPayload.$Properties
         * @deprecated Use game.UserInfoPayload.$Properties instead.
         */

        /**
         * Shape of a UserInfoPayload.
         * @typedef {game.UserInfoPayload.$Properties} game.UserInfoPayload.$Shape
         */

        /**
         * Constructs a new UserInfoPayload.
         * @memberof game
         * @classdesc Represents a UserInfoPayload.
         * @constructor
         * @param {game.UserInfoPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function UserInfoPayload(properties) {
            this.bars = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoPayload targetUserId.
         * @member {string} targetUserId
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.targetUserId = "";

        /**
         * UserInfoPayload scopeType.
         * @member {string} scopeType
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.scopeType = "";

        /**
         * UserInfoPayload bars.
         * @member {Array.<game.UserInfoBar.$Properties>} bars
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.bars = $util.emptyArray;

        /**
         * UserInfoPayload canEditDescription.
         * @member {boolean} canEditDescription
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.canEditDescription = false;

        /**
         * UserInfoPayload canEditBars.
         * @member {boolean} canEditBars
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.canEditBars = false;

        /**
         * UserInfoPayload infoText.
         * @member {string} infoText
         * @memberof game.UserInfoPayload
         * @instance
         */
        UserInfoPayload.prototype.infoText = "";

        /**
         * Creates a new UserInfoPayload instance using the specified properties.
         * @function create
         * @memberof game.UserInfoPayload
         * @static
         * @param {game.UserInfoPayload.$Properties=} [properties] Properties to set
         * @returns {game.UserInfoPayload} UserInfoPayload instance
         * @type {{
         *   (properties: game.UserInfoPayload.$Shape): game.UserInfoPayload & game.UserInfoPayload.$Shape;
         *   (properties?: game.UserInfoPayload.$Properties): game.UserInfoPayload;
         * }}
         */
        UserInfoPayload.create = function create(properties) {
            return new UserInfoPayload(properties);
        };

        /**
         * Encodes the specified UserInfoPayload message. Does not implicitly {@link game.UserInfoPayload.verify|verify} messages.
         * @function encode
         * @memberof game.UserInfoPayload
         * @static
         * @param {game.UserInfoPayload.$Properties} message UserInfoPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoPayload.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetUserId);
            if (message.scopeType != null && Object.hasOwnProperty.call(message, "scopeType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.scopeType);
            if (message.bars != null && message.bars.length)
                for (let i = 0; i < message.bars.length; ++i)
                    $root.game.UserInfoBar.encode(message.bars[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.canEditDescription != null && Object.hasOwnProperty.call(message, "canEditDescription"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canEditDescription);
            if (message.canEditBars != null && Object.hasOwnProperty.call(message, "canEditBars"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.canEditBars);
            if (message.infoText != null && Object.hasOwnProperty.call(message, "infoText"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.infoText);
            return writer;
        };

        /**
         * Encodes the specified UserInfoPayload message, length delimited. Does not implicitly {@link game.UserInfoPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserInfoPayload
         * @static
         * @param {game.UserInfoPayload.$Properties} message UserInfoPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a UserInfoPayload message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserInfoPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserInfoPayload & game.UserInfoPayload.$Shape} UserInfoPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoPayload.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.targetUserId = reader.string();
                        break;
                    }
                case 2: {
                        message.scopeType = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.bars && message.bars.length))
                            message.bars = [];
                        message.bars.push($root.game.UserInfoBar.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 4: {
                        message.canEditDescription = reader.bool();
                        break;
                    }
                case 5: {
                        message.canEditBars = reader.bool();
                        break;
                    }
                case 6: {
                        message.infoText = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserInfoPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserInfoPayload & game.UserInfoPayload.$Shape} UserInfoPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoPayload message.
         * @function verify
         * @memberof game.UserInfoPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoPayload.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isString(message.targetUserId))
                    return "targetUserId: string expected";
            if (message.scopeType != null && message.hasOwnProperty("scopeType"))
                if (!$util.isString(message.scopeType))
                    return "scopeType: string expected";
            if (message.bars != null && message.hasOwnProperty("bars")) {
                if (!Array.isArray(message.bars))
                    return "bars: array expected";
                for (let i = 0; i < message.bars.length; ++i) {
                    let error = $root.game.UserInfoBar.verify(message.bars[i], long + 1);
                    if (error)
                        return "bars." + error;
                }
            }
            if (message.canEditDescription != null && message.hasOwnProperty("canEditDescription"))
                if (typeof message.canEditDescription !== "boolean")
                    return "canEditDescription: boolean expected";
            if (message.canEditBars != null && message.hasOwnProperty("canEditBars"))
                if (typeof message.canEditBars !== "boolean")
                    return "canEditBars: boolean expected";
            if (message.infoText != null && message.hasOwnProperty("infoText"))
                if (!$util.isString(message.infoText))
                    return "infoText: string expected";
            return null;
        };

        /**
         * Creates a UserInfoPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserInfoPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserInfoPayload} UserInfoPayload
         */
        UserInfoPayload.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.targetUserId != null)
                message.targetUserId = String(object.targetUserId);
            if (object.scopeType != null)
                message.scopeType = String(object.scopeType);
            if (object.bars) {
                if (!Array.isArray(object.bars))
                    throw TypeError(".game.UserInfoPayload.bars: array expected");
                message.bars = [];
                for (let i = 0; i < object.bars.length; ++i) {
                    if (typeof object.bars[i] !== "object")
                        throw TypeError(".game.UserInfoPayload.bars: object expected");
                    message.bars[i] = $root.game.UserInfoBar.fromObject(object.bars[i], long + 1);
                }
            }
            if (object.canEditDescription != null)
                message.canEditDescription = Boolean(object.canEditDescription);
            if (object.canEditBars != null)
                message.canEditBars = Boolean(object.canEditBars);
            if (object.infoText != null)
                message.infoText = String(object.infoText);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserInfoPayload
         * @static
         * @param {game.UserInfoPayload} message UserInfoPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoPayload.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.bars = [];
            if (options.defaults) {
                object.targetUserId = "";
                object.scopeType = "";
                object.canEditDescription = false;
                object.canEditBars = false;
                object.infoText = "";
            }
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.scopeType != null && message.hasOwnProperty("scopeType"))
                object.scopeType = message.scopeType;
            if (message.bars && message.bars.length) {
                object.bars = [];
                for (let j = 0; j < message.bars.length; ++j)
                    object.bars[j] = $root.game.UserInfoBar.toObject(message.bars[j], options, _depth + 1);
            }
            if (message.canEditDescription != null && message.hasOwnProperty("canEditDescription"))
                object.canEditDescription = message.canEditDescription;
            if (message.canEditBars != null && message.hasOwnProperty("canEditBars"))
                object.canEditBars = message.canEditBars;
            if (message.infoText != null && message.hasOwnProperty("infoText"))
                object.infoText = message.infoText;
            return object;
        };

        /**
         * Converts this UserInfoPayload to JSON.
         * @function toJSON
         * @memberof game.UserInfoPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserInfoPayload
         * @function getTypeUrl
         * @memberof game.UserInfoPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserInfoPayload.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UserInfoPayload";
        };

        return UserInfoPayload;
    })();

    game.UserInfoMessage = (function() {

        /**
         * Properties of a UserInfoMessage.
         * @typedef {Object} game.UserInfoMessage.$Properties
         * @property {string|null} [playerId] UserInfoMessage playerId
         * @property {string|null} [type] UserInfoMessage type
         * @property {string|null} [targetUserId] UserInfoMessage targetUserId
         * @property {Array.<game.UserInfoBar.$Properties>|null} [bars] UserInfoMessage bars
         * @property {game.UserInfoPayload.$Properties|null} [payload] UserInfoMessage payload
         * @property {string|null} [infoText] UserInfoMessage infoText
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a UserInfoMessage.
         * @memberof game
         * @interface IUserInfoMessage
         * @augments game.UserInfoMessage.$Properties
         * @deprecated Use game.UserInfoMessage.$Properties instead.
         */

        /**
         * Shape of a UserInfoMessage.
         * @typedef {game.UserInfoMessage.$Properties} game.UserInfoMessage.$Shape
         */

        /**
         * Constructs a new UserInfoMessage.
         * @memberof game
         * @classdesc Represents a UserInfoMessage.
         * @constructor
         * @param {game.UserInfoMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function UserInfoMessage(properties) {
            this.bars = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoMessage playerId.
         * @member {string} playerId
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.playerId = "";

        /**
         * UserInfoMessage type.
         * @member {string} type
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.type = "";

        /**
         * UserInfoMessage targetUserId.
         * @member {string} targetUserId
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.targetUserId = "";

        /**
         * UserInfoMessage bars.
         * @member {Array.<game.UserInfoBar.$Properties>} bars
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.bars = $util.emptyArray;

        /**
         * UserInfoMessage payload.
         * @member {game.UserInfoPayload.$Properties|null|undefined} payload
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.payload = null;

        /**
         * UserInfoMessage infoText.
         * @member {string} infoText
         * @memberof game.UserInfoMessage
         * @instance
         */
        UserInfoMessage.prototype.infoText = "";

        /**
         * Creates a new UserInfoMessage instance using the specified properties.
         * @function create
         * @memberof game.UserInfoMessage
         * @static
         * @param {game.UserInfoMessage.$Properties=} [properties] Properties to set
         * @returns {game.UserInfoMessage} UserInfoMessage instance
         * @type {{
         *   (properties: game.UserInfoMessage.$Shape): game.UserInfoMessage & game.UserInfoMessage.$Shape;
         *   (properties?: game.UserInfoMessage.$Properties): game.UserInfoMessage;
         * }}
         */
        UserInfoMessage.create = function create(properties) {
            return new UserInfoMessage(properties);
        };

        /**
         * Encodes the specified UserInfoMessage message. Does not implicitly {@link game.UserInfoMessage.verify|verify} messages.
         * @function encode
         * @memberof game.UserInfoMessage
         * @static
         * @param {game.UserInfoMessage.$Properties} message UserInfoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUserId);
            if (message.bars != null && message.bars.length)
                for (let i = 0; i < message.bars.length; ++i)
                    $root.game.UserInfoBar.encode(message.bars[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.game.UserInfoPayload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.infoText != null && Object.hasOwnProperty.call(message, "infoText"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.infoText);
            return writer;
        };

        /**
         * Encodes the specified UserInfoMessage message, length delimited. Does not implicitly {@link game.UserInfoMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserInfoMessage
         * @static
         * @param {game.UserInfoMessage.$Properties} message UserInfoMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a UserInfoMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserInfoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserInfoMessage & game.UserInfoMessage.$Shape} UserInfoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.targetUserId = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.bars && message.bars.length))
                            message.bars = [];
                        message.bars.push($root.game.UserInfoBar.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 5: {
                        message.payload = $root.game.UserInfoPayload.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        message.infoText = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserInfoMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserInfoMessage & game.UserInfoMessage.$Shape} UserInfoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoMessage message.
         * @function verify
         * @memberof game.UserInfoMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isString(message.targetUserId))
                    return "targetUserId: string expected";
            if (message.bars != null && message.hasOwnProperty("bars")) {
                if (!Array.isArray(message.bars))
                    return "bars: array expected";
                for (let i = 0; i < message.bars.length; ++i) {
                    let error = $root.game.UserInfoBar.verify(message.bars[i], long + 1);
                    if (error)
                        return "bars." + error;
                }
            }
            if (message.payload != null && message.hasOwnProperty("payload")) {
                let error = $root.game.UserInfoPayload.verify(message.payload, long + 1);
                if (error)
                    return "payload." + error;
            }
            if (message.infoText != null && message.hasOwnProperty("infoText"))
                if (!$util.isString(message.infoText))
                    return "infoText: string expected";
            return null;
        };

        /**
         * Creates a UserInfoMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserInfoMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserInfoMessage} UserInfoMessage
         */
        UserInfoMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.targetUserId != null)
                message.targetUserId = String(object.targetUserId);
            if (object.bars) {
                if (!Array.isArray(object.bars))
                    throw TypeError(".game.UserInfoMessage.bars: array expected");
                message.bars = [];
                for (let i = 0; i < object.bars.length; ++i) {
                    if (typeof object.bars[i] !== "object")
                        throw TypeError(".game.UserInfoMessage.bars: object expected");
                    message.bars[i] = $root.game.UserInfoBar.fromObject(object.bars[i], long + 1);
                }
            }
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".game.UserInfoMessage.payload: object expected");
                message.payload = $root.game.UserInfoPayload.fromObject(object.payload, long + 1);
            }
            if (object.infoText != null)
                message.infoText = String(object.infoText);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserInfoMessage
         * @static
         * @param {game.UserInfoMessage} message UserInfoMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.bars = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.targetUserId = "";
                object.payload = null;
                object.infoText = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.bars && message.bars.length) {
                object.bars = [];
                for (let j = 0; j < message.bars.length; ++j)
                    object.bars[j] = $root.game.UserInfoBar.toObject(message.bars[j], options, _depth + 1);
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.game.UserInfoPayload.toObject(message.payload, options, _depth + 1);
            if (message.infoText != null && message.hasOwnProperty("infoText"))
                object.infoText = message.infoText;
            return object;
        };

        /**
         * Converts this UserInfoMessage to JSON.
         * @function toJSON
         * @memberof game.UserInfoMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserInfoMessage
         * @function getTypeUrl
         * @memberof game.UserInfoMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserInfoMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UserInfoMessage";
        };

        return UserInfoMessage;
    })();

    game.PlayerStat = (function() {

        /**
         * Properties of a PlayerStat.
         * @typedef {Object} game.PlayerStat.$Properties
         * @property {string|null} [statId] PlayerStat statId
         * @property {string|null} [userId] PlayerStat userId
         * @property {string|null} [key] PlayerStat key
         * @property {string|null} [label] PlayerStat label
         * @property {string|null} [role] PlayerStat role
         * @property {string|null} [kind] PlayerStat kind
         * @property {number|null} [value] PlayerStat value
         * @property {number|null} [maxValue] PlayerStat maxValue
         * @property {string|null} [color] PlayerStat color
         * @property {string|null} [showTo] PlayerStat showTo
         * @property {Array.<string>|null} [sourceNoteIds] PlayerStat sourceNoteIds
         * @property {string|null} [rollName] PlayerStat rollName
         * @property {string|null} [rollKey] PlayerStat rollKey
         * @property {string|null} [rollConfigId] PlayerStat rollConfigId
         * @property {string|null} [rollModifierStatKey] PlayerStat rollModifierStatKey
         * @property {string|null} [rollDiceStatKey] PlayerStat rollDiceStatKey
         * @property {string|null} [rollDiceOperation] PlayerStat rollDiceOperation
         * @property {string|null} [rollMode] PlayerStat rollMode
         * @property {string|null} [rollTargetStatKey] PlayerStat rollTargetStatKey
         * @property {string|null} [rollOwnerId] PlayerStat rollOwnerId
         * @property {boolean|null} [isReversed] PlayerStat isReversed
         * @property {number|null} [rollBaseDiceCount] PlayerStat rollBaseDiceCount
         * @property {string|null} [rollResultMode] PlayerStat rollResultMode
         * @property {string|null} [rollFormula] PlayerStat rollFormula
         * @property {number|Long|null} [createdAt] PlayerStat createdAt
         * @property {number|Long|null} [updatedAt] PlayerStat updatedAt
         * @property {string|null} [rollVisibility] PlayerStat rollVisibility
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerStat.
         * @memberof game
         * @interface IPlayerStat
         * @augments game.PlayerStat.$Properties
         * @deprecated Use game.PlayerStat.$Properties instead.
         */

        /**
         * Shape of a PlayerStat.
         * @typedef {game.PlayerStat.$Properties} game.PlayerStat.$Shape
         */

        /**
         * Constructs a new PlayerStat.
         * @memberof game
         * @classdesc Represents a PlayerStat.
         * @constructor
         * @param {game.PlayerStat.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerStat(properties) {
            this.sourceNoteIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerStat statId.
         * @member {string} statId
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.statId = "";

        /**
         * PlayerStat userId.
         * @member {string} userId
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.userId = "";

        /**
         * PlayerStat key.
         * @member {string} key
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.key = "";

        /**
         * PlayerStat label.
         * @member {string} label
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.label = "";

        /**
         * PlayerStat role.
         * @member {string} role
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.role = "";

        /**
         * PlayerStat kind.
         * @member {string} kind
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.kind = "";

        /**
         * PlayerStat value.
         * @member {number} value
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.value = 0;

        /**
         * PlayerStat maxValue.
         * @member {number} maxValue
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.maxValue = 0;

        /**
         * PlayerStat color.
         * @member {string} color
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.color = "";

        /**
         * PlayerStat showTo.
         * @member {string} showTo
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.showTo = "";

        /**
         * PlayerStat sourceNoteIds.
         * @member {Array.<string>} sourceNoteIds
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.sourceNoteIds = $util.emptyArray;

        /**
         * PlayerStat rollName.
         * @member {string} rollName
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollName = "";

        /**
         * PlayerStat rollKey.
         * @member {string} rollKey
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollKey = "";

        /**
         * PlayerStat rollConfigId.
         * @member {string} rollConfigId
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollConfigId = "";

        /**
         * PlayerStat rollModifierStatKey.
         * @member {string} rollModifierStatKey
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollModifierStatKey = "";

        /**
         * PlayerStat rollDiceStatKey.
         * @member {string} rollDiceStatKey
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollDiceStatKey = "";

        /**
         * PlayerStat rollDiceOperation.
         * @member {string} rollDiceOperation
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollDiceOperation = "";

        /**
         * PlayerStat rollMode.
         * @member {string} rollMode
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollMode = "";

        /**
         * PlayerStat rollTargetStatKey.
         * @member {string} rollTargetStatKey
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollTargetStatKey = "";

        /**
         * PlayerStat rollOwnerId.
         * @member {string} rollOwnerId
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollOwnerId = "";

        /**
         * PlayerStat isReversed.
         * @member {boolean} isReversed
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.isReversed = false;

        /**
         * PlayerStat rollBaseDiceCount.
         * @member {number} rollBaseDiceCount
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollBaseDiceCount = 0;

        /**
         * PlayerStat rollResultMode.
         * @member {string} rollResultMode
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollResultMode = "";

        /**
         * PlayerStat rollFormula.
         * @member {string} rollFormula
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollFormula = "";

        /**
         * PlayerStat createdAt.
         * @member {number|Long} createdAt
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerStat updatedAt.
         * @member {number|Long} updatedAt
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerStat rollVisibility.
         * @member {string} rollVisibility
         * @memberof game.PlayerStat
         * @instance
         */
        PlayerStat.prototype.rollVisibility = "";

        /**
         * Creates a new PlayerStat instance using the specified properties.
         * @function create
         * @memberof game.PlayerStat
         * @static
         * @param {game.PlayerStat.$Properties=} [properties] Properties to set
         * @returns {game.PlayerStat} PlayerStat instance
         * @type {{
         *   (properties: game.PlayerStat.$Shape): game.PlayerStat & game.PlayerStat.$Shape;
         *   (properties?: game.PlayerStat.$Properties): game.PlayerStat;
         * }}
         */
        PlayerStat.create = function create(properties) {
            return new PlayerStat(properties);
        };

        /**
         * Encodes the specified PlayerStat message. Does not implicitly {@link game.PlayerStat.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerStat
         * @static
         * @param {game.PlayerStat.$Properties} message PlayerStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStat.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.statId != null && Object.hasOwnProperty.call(message, "statId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.statId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.label);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.role);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.kind);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.value);
            if (message.maxValue != null && Object.hasOwnProperty.call(message, "maxValue"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.maxValue);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.color);
            if (message.showTo != null && Object.hasOwnProperty.call(message, "showTo"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.showTo);
            if (message.sourceNoteIds != null && message.sourceNoteIds.length)
                for (let i = 0; i < message.sourceNoteIds.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.sourceNoteIds[i]);
            if (message.rollName != null && Object.hasOwnProperty.call(message, "rollName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.rollName);
            if (message.rollKey != null && Object.hasOwnProperty.call(message, "rollKey"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.rollKey);
            if (message.rollConfigId != null && Object.hasOwnProperty.call(message, "rollConfigId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.rollConfigId);
            if (message.rollModifierStatKey != null && Object.hasOwnProperty.call(message, "rollModifierStatKey"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.rollModifierStatKey);
            if (message.rollDiceStatKey != null && Object.hasOwnProperty.call(message, "rollDiceStatKey"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.rollDiceStatKey);
            if (message.rollDiceOperation != null && Object.hasOwnProperty.call(message, "rollDiceOperation"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.rollDiceOperation);
            if (message.rollMode != null && Object.hasOwnProperty.call(message, "rollMode"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.rollMode);
            if (message.rollTargetStatKey != null && Object.hasOwnProperty.call(message, "rollTargetStatKey"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.rollTargetStatKey);
            if (message.rollOwnerId != null && Object.hasOwnProperty.call(message, "rollOwnerId"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.rollOwnerId);
            if (message.isReversed != null && Object.hasOwnProperty.call(message, "isReversed"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.isReversed);
            if (message.rollBaseDiceCount != null && Object.hasOwnProperty.call(message, "rollBaseDiceCount"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.rollBaseDiceCount);
            if (message.rollResultMode != null && Object.hasOwnProperty.call(message, "rollResultMode"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.rollResultMode);
            if (message.rollFormula != null && Object.hasOwnProperty.call(message, "rollFormula"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.rollFormula);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 25, wireType 0 =*/200).int64(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 26, wireType 0 =*/208).int64(message.updatedAt);
            if (message.rollVisibility != null && Object.hasOwnProperty.call(message, "rollVisibility"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.rollVisibility);
            return writer;
        };

        /**
         * Encodes the specified PlayerStat message, length delimited. Does not implicitly {@link game.PlayerStat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerStat
         * @static
         * @param {game.PlayerStat.$Properties} message PlayerStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerStat message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerStat & game.PlayerStat.$Shape} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStat.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.statId = reader.string();
                        break;
                    }
                case 2: {
                        message.userId = reader.string();
                        break;
                    }
                case 3: {
                        message.key = reader.string();
                        break;
                    }
                case 4: {
                        message.label = reader.string();
                        break;
                    }
                case 5: {
                        message.role = reader.string();
                        break;
                    }
                case 6: {
                        message.kind = reader.string();
                        break;
                    }
                case 7: {
                        message.value = reader.int32();
                        break;
                    }
                case 8: {
                        message.maxValue = reader.int32();
                        break;
                    }
                case 9: {
                        message.color = reader.string();
                        break;
                    }
                case 10: {
                        message.showTo = reader.string();
                        break;
                    }
                case 11: {
                        if (!(message.sourceNoteIds && message.sourceNoteIds.length))
                            message.sourceNoteIds = [];
                        message.sourceNoteIds.push(reader.string());
                        break;
                    }
                case 12: {
                        message.rollName = reader.string();
                        break;
                    }
                case 13: {
                        message.rollKey = reader.string();
                        break;
                    }
                case 14: {
                        message.rollConfigId = reader.string();
                        break;
                    }
                case 15: {
                        message.rollModifierStatKey = reader.string();
                        break;
                    }
                case 16: {
                        message.rollDiceStatKey = reader.string();
                        break;
                    }
                case 17: {
                        message.rollDiceOperation = reader.string();
                        break;
                    }
                case 18: {
                        message.rollMode = reader.string();
                        break;
                    }
                case 19: {
                        message.rollTargetStatKey = reader.string();
                        break;
                    }
                case 20: {
                        message.rollOwnerId = reader.string();
                        break;
                    }
                case 21: {
                        message.isReversed = reader.bool();
                        break;
                    }
                case 22: {
                        message.rollBaseDiceCount = reader.int32();
                        break;
                    }
                case 23: {
                        message.rollResultMode = reader.string();
                        break;
                    }
                case 24: {
                        message.rollFormula = reader.string();
                        break;
                    }
                case 25: {
                        message.createdAt = reader.int64();
                        break;
                    }
                case 26: {
                        message.updatedAt = reader.int64();
                        break;
                    }
                case 27: {
                        message.rollVisibility = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerStat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerStat & game.PlayerStat.$Shape} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerStat message.
         * @function verify
         * @memberof game.PlayerStat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerStat.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.statId != null && message.hasOwnProperty("statId"))
                if (!$util.isString(message.statId))
                    return "statId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                if (!$util.isInteger(message.maxValue))
                    return "maxValue: integer expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.showTo != null && message.hasOwnProperty("showTo"))
                if (!$util.isString(message.showTo))
                    return "showTo: string expected";
            if (message.sourceNoteIds != null && message.hasOwnProperty("sourceNoteIds")) {
                if (!Array.isArray(message.sourceNoteIds))
                    return "sourceNoteIds: array expected";
                for (let i = 0; i < message.sourceNoteIds.length; ++i)
                    if (!$util.isString(message.sourceNoteIds[i]))
                        return "sourceNoteIds: string[] expected";
            }
            if (message.rollName != null && message.hasOwnProperty("rollName"))
                if (!$util.isString(message.rollName))
                    return "rollName: string expected";
            if (message.rollKey != null && message.hasOwnProperty("rollKey"))
                if (!$util.isString(message.rollKey))
                    return "rollKey: string expected";
            if (message.rollConfigId != null && message.hasOwnProperty("rollConfigId"))
                if (!$util.isString(message.rollConfigId))
                    return "rollConfigId: string expected";
            if (message.rollModifierStatKey != null && message.hasOwnProperty("rollModifierStatKey"))
                if (!$util.isString(message.rollModifierStatKey))
                    return "rollModifierStatKey: string expected";
            if (message.rollDiceStatKey != null && message.hasOwnProperty("rollDiceStatKey"))
                if (!$util.isString(message.rollDiceStatKey))
                    return "rollDiceStatKey: string expected";
            if (message.rollDiceOperation != null && message.hasOwnProperty("rollDiceOperation"))
                if (!$util.isString(message.rollDiceOperation))
                    return "rollDiceOperation: string expected";
            if (message.rollMode != null && message.hasOwnProperty("rollMode"))
                if (!$util.isString(message.rollMode))
                    return "rollMode: string expected";
            if (message.rollTargetStatKey != null && message.hasOwnProperty("rollTargetStatKey"))
                if (!$util.isString(message.rollTargetStatKey))
                    return "rollTargetStatKey: string expected";
            if (message.rollOwnerId != null && message.hasOwnProperty("rollOwnerId"))
                if (!$util.isString(message.rollOwnerId))
                    return "rollOwnerId: string expected";
            if (message.isReversed != null && message.hasOwnProperty("isReversed"))
                if (typeof message.isReversed !== "boolean")
                    return "isReversed: boolean expected";
            if (message.rollBaseDiceCount != null && message.hasOwnProperty("rollBaseDiceCount"))
                if (!$util.isInteger(message.rollBaseDiceCount))
                    return "rollBaseDiceCount: integer expected";
            if (message.rollResultMode != null && message.hasOwnProperty("rollResultMode"))
                if (!$util.isString(message.rollResultMode))
                    return "rollResultMode: string expected";
            if (message.rollFormula != null && message.hasOwnProperty("rollFormula"))
                if (!$util.isString(message.rollFormula))
                    return "rollFormula: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            if (message.rollVisibility != null && message.hasOwnProperty("rollVisibility"))
                if (!$util.isString(message.rollVisibility))
                    return "rollVisibility: string expected";
            return null;
        };

        /**
         * Creates a PlayerStat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerStat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerStat} PlayerStat
         */
        PlayerStat.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.statId != null)
                message.statId = String(object.statId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.key != null)
                message.key = String(object.key);
            if (object.label != null)
                message.label = String(object.label);
            if (object.role != null)
                message.role = String(object.role);
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.value != null)
                message.value = object.value | 0;
            if (object.maxValue != null)
                message.maxValue = object.maxValue | 0;
            if (object.color != null)
                message.color = String(object.color);
            if (object.showTo != null)
                message.showTo = String(object.showTo);
            if (object.sourceNoteIds) {
                if (!Array.isArray(object.sourceNoteIds))
                    throw TypeError(".game.PlayerStat.sourceNoteIds: array expected");
                message.sourceNoteIds = [];
                for (let i = 0; i < object.sourceNoteIds.length; ++i)
                    message.sourceNoteIds[i] = String(object.sourceNoteIds[i]);
            }
            if (object.rollName != null)
                message.rollName = String(object.rollName);
            if (object.rollKey != null)
                message.rollKey = String(object.rollKey);
            if (object.rollConfigId != null)
                message.rollConfigId = String(object.rollConfigId);
            if (object.rollModifierStatKey != null)
                message.rollModifierStatKey = String(object.rollModifierStatKey);
            if (object.rollDiceStatKey != null)
                message.rollDiceStatKey = String(object.rollDiceStatKey);
            if (object.rollDiceOperation != null)
                message.rollDiceOperation = String(object.rollDiceOperation);
            if (object.rollMode != null)
                message.rollMode = String(object.rollMode);
            if (object.rollTargetStatKey != null)
                message.rollTargetStatKey = String(object.rollTargetStatKey);
            if (object.rollOwnerId != null)
                message.rollOwnerId = String(object.rollOwnerId);
            if (object.isReversed != null)
                message.isReversed = Boolean(object.isReversed);
            if (object.rollBaseDiceCount != null)
                message.rollBaseDiceCount = object.rollBaseDiceCount | 0;
            if (object.rollResultMode != null)
                message.rollResultMode = String(object.rollResultMode);
            if (object.rollFormula != null)
                message.rollFormula = String(object.rollFormula);
            if (object.createdAt != null)
                if ($util.Long)
                    message.createdAt = $util.Long.fromValue(object.createdAt, false);
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    message.updatedAt = $util.Long.fromValue(object.updatedAt, false);
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            if (object.rollVisibility != null)
                message.rollVisibility = String(object.rollVisibility);
            return message;
        };

        /**
         * Creates a plain object from a PlayerStat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerStat
         * @static
         * @param {game.PlayerStat} message PlayerStat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerStat.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.sourceNoteIds = [];
            if (options.defaults) {
                object.statId = "";
                object.userId = "";
                object.key = "";
                object.label = "";
                object.role = "";
                object.kind = "";
                object.value = 0;
                object.maxValue = 0;
                object.color = "";
                object.showTo = "";
                object.rollName = "";
                object.rollKey = "";
                object.rollConfigId = "";
                object.rollModifierStatKey = "";
                object.rollDiceStatKey = "";
                object.rollDiceOperation = "";
                object.rollMode = "";
                object.rollTargetStatKey = "";
                object.rollOwnerId = "";
                object.isReversed = false;
                object.rollBaseDiceCount = 0;
                object.rollResultMode = "";
                object.rollFormula = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.rollVisibility = "";
            }
            if (message.statId != null && message.hasOwnProperty("statId"))
                object.statId = message.statId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                object.maxValue = message.maxValue;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.showTo != null && message.hasOwnProperty("showTo"))
                object.showTo = message.showTo;
            if (message.sourceNoteIds && message.sourceNoteIds.length) {
                object.sourceNoteIds = [];
                for (let j = 0; j < message.sourceNoteIds.length; ++j)
                    object.sourceNoteIds[j] = message.sourceNoteIds[j];
            }
            if (message.rollName != null && message.hasOwnProperty("rollName"))
                object.rollName = message.rollName;
            if (message.rollKey != null && message.hasOwnProperty("rollKey"))
                object.rollKey = message.rollKey;
            if (message.rollConfigId != null && message.hasOwnProperty("rollConfigId"))
                object.rollConfigId = message.rollConfigId;
            if (message.rollModifierStatKey != null && message.hasOwnProperty("rollModifierStatKey"))
                object.rollModifierStatKey = message.rollModifierStatKey;
            if (message.rollDiceStatKey != null && message.hasOwnProperty("rollDiceStatKey"))
                object.rollDiceStatKey = message.rollDiceStatKey;
            if (message.rollDiceOperation != null && message.hasOwnProperty("rollDiceOperation"))
                object.rollDiceOperation = message.rollDiceOperation;
            if (message.rollMode != null && message.hasOwnProperty("rollMode"))
                object.rollMode = message.rollMode;
            if (message.rollTargetStatKey != null && message.hasOwnProperty("rollTargetStatKey"))
                object.rollTargetStatKey = message.rollTargetStatKey;
            if (message.rollOwnerId != null && message.hasOwnProperty("rollOwnerId"))
                object.rollOwnerId = message.rollOwnerId;
            if (message.isReversed != null && message.hasOwnProperty("isReversed"))
                object.isReversed = message.isReversed;
            if (message.rollBaseDiceCount != null && message.hasOwnProperty("rollBaseDiceCount"))
                object.rollBaseDiceCount = message.rollBaseDiceCount;
            if (message.rollResultMode != null && message.hasOwnProperty("rollResultMode"))
                object.rollResultMode = message.rollResultMode;
            if (message.rollFormula != null && message.hasOwnProperty("rollFormula"))
                object.rollFormula = message.rollFormula;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.createdAt = typeof message.createdAt === "number" ? BigInt(message.createdAt) : $util.Long.fromBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0, false).toBigInt();
                else if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.updatedAt = typeof message.updatedAt === "number" ? BigInt(message.updatedAt) : $util.Long.fromBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0, false).toBigInt();
                else if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            if (message.rollVisibility != null && message.hasOwnProperty("rollVisibility"))
                object.rollVisibility = message.rollVisibility;
            return object;
        };

        /**
         * Converts this PlayerStat to JSON.
         * @function toJSON
         * @memberof game.PlayerStat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerStat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerStat
         * @function getTypeUrl
         * @memberof game.PlayerStat
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerStat.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerStat";
        };

        return PlayerStat;
    })();

    game.PlayerStatsPayload = (function() {

        /**
         * Properties of a PlayerStatsPayload.
         * @typedef {Object} game.PlayerStatsPayload.$Properties
         * @property {string|null} [targetUserId] PlayerStatsPayload targetUserId
         * @property {string|null} [scopeType] PlayerStatsPayload scopeType
         * @property {Array.<game.PlayerStat.$Properties>|null} [stats] PlayerStatsPayload stats
         * @property {boolean|null} [canEditStats] PlayerStatsPayload canEditStats
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerStatsPayload.
         * @memberof game
         * @interface IPlayerStatsPayload
         * @augments game.PlayerStatsPayload.$Properties
         * @deprecated Use game.PlayerStatsPayload.$Properties instead.
         */

        /**
         * Shape of a PlayerStatsPayload.
         * @typedef {game.PlayerStatsPayload.$Properties} game.PlayerStatsPayload.$Shape
         */

        /**
         * Constructs a new PlayerStatsPayload.
         * @memberof game
         * @classdesc Represents a PlayerStatsPayload.
         * @constructor
         * @param {game.PlayerStatsPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerStatsPayload(properties) {
            this.stats = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerStatsPayload targetUserId.
         * @member {string} targetUserId
         * @memberof game.PlayerStatsPayload
         * @instance
         */
        PlayerStatsPayload.prototype.targetUserId = "";

        /**
         * PlayerStatsPayload scopeType.
         * @member {string} scopeType
         * @memberof game.PlayerStatsPayload
         * @instance
         */
        PlayerStatsPayload.prototype.scopeType = "";

        /**
         * PlayerStatsPayload stats.
         * @member {Array.<game.PlayerStat.$Properties>} stats
         * @memberof game.PlayerStatsPayload
         * @instance
         */
        PlayerStatsPayload.prototype.stats = $util.emptyArray;

        /**
         * PlayerStatsPayload canEditStats.
         * @member {boolean} canEditStats
         * @memberof game.PlayerStatsPayload
         * @instance
         */
        PlayerStatsPayload.prototype.canEditStats = false;

        /**
         * Creates a new PlayerStatsPayload instance using the specified properties.
         * @function create
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {game.PlayerStatsPayload.$Properties=} [properties] Properties to set
         * @returns {game.PlayerStatsPayload} PlayerStatsPayload instance
         * @type {{
         *   (properties: game.PlayerStatsPayload.$Shape): game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape;
         *   (properties?: game.PlayerStatsPayload.$Properties): game.PlayerStatsPayload;
         * }}
         */
        PlayerStatsPayload.create = function create(properties) {
            return new PlayerStatsPayload(properties);
        };

        /**
         * Encodes the specified PlayerStatsPayload message. Does not implicitly {@link game.PlayerStatsPayload.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {game.PlayerStatsPayload.$Properties} message PlayerStatsPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStatsPayload.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetUserId);
            if (message.scopeType != null && Object.hasOwnProperty.call(message, "scopeType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.scopeType);
            if (message.stats != null && message.stats.length)
                for (let i = 0; i < message.stats.length; ++i)
                    $root.game.PlayerStat.encode(message.stats[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.canEditStats != null && Object.hasOwnProperty.call(message, "canEditStats"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canEditStats);
            return writer;
        };

        /**
         * Encodes the specified PlayerStatsPayload message, length delimited. Does not implicitly {@link game.PlayerStatsPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {game.PlayerStatsPayload.$Properties} message PlayerStatsPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStatsPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerStatsPayload message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape} PlayerStatsPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStatsPayload.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.targetUserId = reader.string();
                        break;
                    }
                case 2: {
                        message.scopeType = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.stats && message.stats.length))
                            message.stats = [];
                        message.stats.push($root.game.PlayerStat.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 4: {
                        message.canEditStats = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerStatsPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerStatsPayload & game.PlayerStatsPayload.$Shape} PlayerStatsPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStatsPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerStatsPayload message.
         * @function verify
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerStatsPayload.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isString(message.targetUserId))
                    return "targetUserId: string expected";
            if (message.scopeType != null && message.hasOwnProperty("scopeType"))
                if (!$util.isString(message.scopeType))
                    return "scopeType: string expected";
            if (message.stats != null && message.hasOwnProperty("stats")) {
                if (!Array.isArray(message.stats))
                    return "stats: array expected";
                for (let i = 0; i < message.stats.length; ++i) {
                    let error = $root.game.PlayerStat.verify(message.stats[i], long + 1);
                    if (error)
                        return "stats." + error;
                }
            }
            if (message.canEditStats != null && message.hasOwnProperty("canEditStats"))
                if (typeof message.canEditStats !== "boolean")
                    return "canEditStats: boolean expected";
            return null;
        };

        /**
         * Creates a PlayerStatsPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerStatsPayload} PlayerStatsPayload
         */
        PlayerStatsPayload.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.targetUserId != null)
                message.targetUserId = String(object.targetUserId);
            if (object.scopeType != null)
                message.scopeType = String(object.scopeType);
            if (object.stats) {
                if (!Array.isArray(object.stats))
                    throw TypeError(".game.PlayerStatsPayload.stats: array expected");
                message.stats = [];
                for (let i = 0; i < object.stats.length; ++i) {
                    if (typeof object.stats[i] !== "object")
                        throw TypeError(".game.PlayerStatsPayload.stats: object expected");
                    message.stats[i] = $root.game.PlayerStat.fromObject(object.stats[i], long + 1);
                }
            }
            if (object.canEditStats != null)
                message.canEditStats = Boolean(object.canEditStats);
            return message;
        };

        /**
         * Creates a plain object from a PlayerStatsPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {game.PlayerStatsPayload} message PlayerStatsPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerStatsPayload.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.stats = [];
            if (options.defaults) {
                object.targetUserId = "";
                object.scopeType = "";
                object.canEditStats = false;
            }
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.scopeType != null && message.hasOwnProperty("scopeType"))
                object.scopeType = message.scopeType;
            if (message.stats && message.stats.length) {
                object.stats = [];
                for (let j = 0; j < message.stats.length; ++j)
                    object.stats[j] = $root.game.PlayerStat.toObject(message.stats[j], options, _depth + 1);
            }
            if (message.canEditStats != null && message.hasOwnProperty("canEditStats"))
                object.canEditStats = message.canEditStats;
            return object;
        };

        /**
         * Converts this PlayerStatsPayload to JSON.
         * @function toJSON
         * @memberof game.PlayerStatsPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerStatsPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerStatsPayload
         * @function getTypeUrl
         * @memberof game.PlayerStatsPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerStatsPayload.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerStatsPayload";
        };

        return PlayerStatsPayload;
    })();

    game.PlayerStatsMessage = (function() {

        /**
         * Properties of a PlayerStatsMessage.
         * @typedef {Object} game.PlayerStatsMessage.$Properties
         * @property {string|null} [playerId] PlayerStatsMessage playerId
         * @property {string|null} [type] PlayerStatsMessage type
         * @property {string|null} [targetUserId] PlayerStatsMessage targetUserId
         * @property {Array.<game.PlayerStat.$Properties>|null} [stats] PlayerStatsMessage stats
         * @property {game.PlayerStatsPayload.$Properties|null} [payload] PlayerStatsMessage payload
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerStatsMessage.
         * @memberof game
         * @interface IPlayerStatsMessage
         * @augments game.PlayerStatsMessage.$Properties
         * @deprecated Use game.PlayerStatsMessage.$Properties instead.
         */

        /**
         * Shape of a PlayerStatsMessage.
         * @typedef {game.PlayerStatsMessage.$Properties} game.PlayerStatsMessage.$Shape
         */

        /**
         * Constructs a new PlayerStatsMessage.
         * @memberof game
         * @classdesc Represents a PlayerStatsMessage.
         * @constructor
         * @param {game.PlayerStatsMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerStatsMessage(properties) {
            this.stats = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerStatsMessage playerId.
         * @member {string} playerId
         * @memberof game.PlayerStatsMessage
         * @instance
         */
        PlayerStatsMessage.prototype.playerId = "";

        /**
         * PlayerStatsMessage type.
         * @member {string} type
         * @memberof game.PlayerStatsMessage
         * @instance
         */
        PlayerStatsMessage.prototype.type = "";

        /**
         * PlayerStatsMessage targetUserId.
         * @member {string} targetUserId
         * @memberof game.PlayerStatsMessage
         * @instance
         */
        PlayerStatsMessage.prototype.targetUserId = "";

        /**
         * PlayerStatsMessage stats.
         * @member {Array.<game.PlayerStat.$Properties>} stats
         * @memberof game.PlayerStatsMessage
         * @instance
         */
        PlayerStatsMessage.prototype.stats = $util.emptyArray;

        /**
         * PlayerStatsMessage payload.
         * @member {game.PlayerStatsPayload.$Properties|null|undefined} payload
         * @memberof game.PlayerStatsMessage
         * @instance
         */
        PlayerStatsMessage.prototype.payload = null;

        /**
         * Creates a new PlayerStatsMessage instance using the specified properties.
         * @function create
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {game.PlayerStatsMessage.$Properties=} [properties] Properties to set
         * @returns {game.PlayerStatsMessage} PlayerStatsMessage instance
         * @type {{
         *   (properties: game.PlayerStatsMessage.$Shape): game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape;
         *   (properties?: game.PlayerStatsMessage.$Properties): game.PlayerStatsMessage;
         * }}
         */
        PlayerStatsMessage.create = function create(properties) {
            return new PlayerStatsMessage(properties);
        };

        /**
         * Encodes the specified PlayerStatsMessage message. Does not implicitly {@link game.PlayerStatsMessage.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {game.PlayerStatsMessage.$Properties} message PlayerStatsMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStatsMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUserId);
            if (message.stats != null && message.stats.length)
                for (let i = 0; i < message.stats.length; ++i)
                    $root.game.PlayerStat.encode(message.stats[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.game.PlayerStatsPayload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerStatsMessage message, length delimited. Does not implicitly {@link game.PlayerStatsMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {game.PlayerStatsMessage.$Properties} message PlayerStatsMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStatsMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerStatsMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape} PlayerStatsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStatsMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.targetUserId = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.stats && message.stats.length))
                            message.stats = [];
                        message.stats.push($root.game.PlayerStat.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 5: {
                        message.payload = $root.game.PlayerStatsPayload.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerStatsMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerStatsMessage & game.PlayerStatsMessage.$Shape} PlayerStatsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStatsMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerStatsMessage message.
         * @function verify
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerStatsMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isString(message.targetUserId))
                    return "targetUserId: string expected";
            if (message.stats != null && message.hasOwnProperty("stats")) {
                if (!Array.isArray(message.stats))
                    return "stats: array expected";
                for (let i = 0; i < message.stats.length; ++i) {
                    let error = $root.game.PlayerStat.verify(message.stats[i], long + 1);
                    if (error)
                        return "stats." + error;
                }
            }
            if (message.payload != null && message.hasOwnProperty("payload")) {
                let error = $root.game.PlayerStatsPayload.verify(message.payload, long + 1);
                if (error)
                    return "payload." + error;
            }
            return null;
        };

        /**
         * Creates a PlayerStatsMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerStatsMessage} PlayerStatsMessage
         */
        PlayerStatsMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.targetUserId != null)
                message.targetUserId = String(object.targetUserId);
            if (object.stats) {
                if (!Array.isArray(object.stats))
                    throw TypeError(".game.PlayerStatsMessage.stats: array expected");
                message.stats = [];
                for (let i = 0; i < object.stats.length; ++i) {
                    if (typeof object.stats[i] !== "object")
                        throw TypeError(".game.PlayerStatsMessage.stats: object expected");
                    message.stats[i] = $root.game.PlayerStat.fromObject(object.stats[i], long + 1);
                }
            }
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".game.PlayerStatsMessage.payload: object expected");
                message.payload = $root.game.PlayerStatsPayload.fromObject(object.payload, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerStatsMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {game.PlayerStatsMessage} message PlayerStatsMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerStatsMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.stats = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.targetUserId = "";
                object.payload = null;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.stats && message.stats.length) {
                object.stats = [];
                for (let j = 0; j < message.stats.length; ++j)
                    object.stats[j] = $root.game.PlayerStat.toObject(message.stats[j], options, _depth + 1);
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.game.PlayerStatsPayload.toObject(message.payload, options, _depth + 1);
            return object;
        };

        /**
         * Converts this PlayerStatsMessage to JSON.
         * @function toJSON
         * @memberof game.PlayerStatsMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerStatsMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerStatsMessage
         * @function getTypeUrl
         * @memberof game.PlayerStatsMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerStatsMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerStatsMessage";
        };

        return PlayerStatsMessage;
    })();

    game.DrawingPoint = (function() {

        /**
         * Properties of a DrawingPoint.
         * @typedef {Object} game.DrawingPoint.$Properties
         * @property {number|null} [x] DrawingPoint x
         * @property {number|null} [y] DrawingPoint y
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DrawingPoint.
         * @memberof game
         * @interface IDrawingPoint
         * @augments game.DrawingPoint.$Properties
         * @deprecated Use game.DrawingPoint.$Properties instead.
         */

        /**
         * Shape of a DrawingPoint.
         * @typedef {game.DrawingPoint.$Properties} game.DrawingPoint.$Shape
         */

        /**
         * Constructs a new DrawingPoint.
         * @memberof game
         * @classdesc Represents a DrawingPoint.
         * @constructor
         * @param {game.DrawingPoint.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DrawingPoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawingPoint x.
         * @member {number} x
         * @memberof game.DrawingPoint
         * @instance
         */
        DrawingPoint.prototype.x = 0;

        /**
         * DrawingPoint y.
         * @member {number} y
         * @memberof game.DrawingPoint
         * @instance
         */
        DrawingPoint.prototype.y = 0;

        /**
         * Creates a new DrawingPoint instance using the specified properties.
         * @function create
         * @memberof game.DrawingPoint
         * @static
         * @param {game.DrawingPoint.$Properties=} [properties] Properties to set
         * @returns {game.DrawingPoint} DrawingPoint instance
         * @type {{
         *   (properties: game.DrawingPoint.$Shape): game.DrawingPoint & game.DrawingPoint.$Shape;
         *   (properties?: game.DrawingPoint.$Properties): game.DrawingPoint;
         * }}
         */
        DrawingPoint.create = function create(properties) {
            return new DrawingPoint(properties);
        };

        /**
         * Encodes the specified DrawingPoint message. Does not implicitly {@link game.DrawingPoint.verify|verify} messages.
         * @function encode
         * @memberof game.DrawingPoint
         * @static
         * @param {game.DrawingPoint.$Properties} message DrawingPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingPoint.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };

        /**
         * Encodes the specified DrawingPoint message, length delimited. Does not implicitly {@link game.DrawingPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DrawingPoint
         * @static
         * @param {game.DrawingPoint.$Properties} message DrawingPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DrawingPoint message from the specified reader or buffer.
         * @function decode
         * @memberof game.DrawingPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DrawingPoint & game.DrawingPoint.$Shape} DrawingPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingPoint.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawingPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DrawingPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DrawingPoint & game.DrawingPoint.$Shape} DrawingPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawingPoint message.
         * @function verify
         * @memberof game.DrawingPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawingPoint.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a DrawingPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DrawingPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DrawingPoint} DrawingPoint
         */
        DrawingPoint.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a DrawingPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DrawingPoint
         * @static
         * @param {game.DrawingPoint} message DrawingPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawingPoint.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this DrawingPoint to JSON.
         * @function toJSON
         * @memberof game.DrawingPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawingPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DrawingPoint
         * @function getTypeUrl
         * @memberof game.DrawingPoint
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DrawingPoint.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DrawingPoint";
        };

        return DrawingPoint;
    })();

    game.DrawingStroke = (function() {

        /**
         * Properties of a DrawingStroke.
         * @typedef {Object} game.DrawingStroke.$Properties
         * @property {string|null} [strokeId] DrawingStroke strokeId
         * @property {string|null} [tool] DrawingStroke tool
         * @property {string|null} [color] DrawingStroke color
         * @property {number|null} [size] DrawingStroke size
         * @property {Array.<game.DrawingPoint.$Properties>|null} [points] DrawingStroke points
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DrawingStroke.
         * @memberof game
         * @interface IDrawingStroke
         * @augments game.DrawingStroke.$Properties
         * @deprecated Use game.DrawingStroke.$Properties instead.
         */

        /**
         * Shape of a DrawingStroke.
         * @typedef {game.DrawingStroke.$Properties} game.DrawingStroke.$Shape
         */

        /**
         * Constructs a new DrawingStroke.
         * @memberof game
         * @classdesc Represents a DrawingStroke.
         * @constructor
         * @param {game.DrawingStroke.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DrawingStroke(properties) {
            this.points = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawingStroke strokeId.
         * @member {string} strokeId
         * @memberof game.DrawingStroke
         * @instance
         */
        DrawingStroke.prototype.strokeId = "";

        /**
         * DrawingStroke tool.
         * @member {string} tool
         * @memberof game.DrawingStroke
         * @instance
         */
        DrawingStroke.prototype.tool = "";

        /**
         * DrawingStroke color.
         * @member {string} color
         * @memberof game.DrawingStroke
         * @instance
         */
        DrawingStroke.prototype.color = "";

        /**
         * DrawingStroke size.
         * @member {number} size
         * @memberof game.DrawingStroke
         * @instance
         */
        DrawingStroke.prototype.size = 0;

        /**
         * DrawingStroke points.
         * @member {Array.<game.DrawingPoint.$Properties>} points
         * @memberof game.DrawingStroke
         * @instance
         */
        DrawingStroke.prototype.points = $util.emptyArray;

        /**
         * Creates a new DrawingStroke instance using the specified properties.
         * @function create
         * @memberof game.DrawingStroke
         * @static
         * @param {game.DrawingStroke.$Properties=} [properties] Properties to set
         * @returns {game.DrawingStroke} DrawingStroke instance
         * @type {{
         *   (properties: game.DrawingStroke.$Shape): game.DrawingStroke & game.DrawingStroke.$Shape;
         *   (properties?: game.DrawingStroke.$Properties): game.DrawingStroke;
         * }}
         */
        DrawingStroke.create = function create(properties) {
            return new DrawingStroke(properties);
        };

        /**
         * Encodes the specified DrawingStroke message. Does not implicitly {@link game.DrawingStroke.verify|verify} messages.
         * @function encode
         * @memberof game.DrawingStroke
         * @static
         * @param {game.DrawingStroke.$Properties} message DrawingStroke message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingStroke.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.strokeId != null && Object.hasOwnProperty.call(message, "strokeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.strokeId);
            if (message.tool != null && Object.hasOwnProperty.call(message, "tool"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tool);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.size);
            if (message.points != null && message.points.length)
                for (let i = 0; i < message.points.length; ++i)
                    $root.game.DrawingPoint.encode(message.points[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DrawingStroke message, length delimited. Does not implicitly {@link game.DrawingStroke.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DrawingStroke
         * @static
         * @param {game.DrawingStroke.$Properties} message DrawingStroke message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingStroke.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DrawingStroke message from the specified reader or buffer.
         * @function decode
         * @memberof game.DrawingStroke
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DrawingStroke & game.DrawingStroke.$Shape} DrawingStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingStroke.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.strokeId = reader.string();
                        break;
                    }
                case 2: {
                        message.tool = reader.string();
                        break;
                    }
                case 3: {
                        message.color = reader.string();
                        break;
                    }
                case 4: {
                        message.size = reader.float();
                        break;
                    }
                case 5: {
                        if (!(message.points && message.points.length))
                            message.points = [];
                        message.points.push($root.game.DrawingPoint.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawingStroke message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DrawingStroke
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DrawingStroke & game.DrawingStroke.$Shape} DrawingStroke
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingStroke.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawingStroke message.
         * @function verify
         * @memberof game.DrawingStroke
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawingStroke.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.strokeId != null && message.hasOwnProperty("strokeId"))
                if (!$util.isString(message.strokeId))
                    return "strokeId: string expected";
            if (message.tool != null && message.hasOwnProperty("tool"))
                if (!$util.isString(message.tool))
                    return "tool: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size !== "number")
                    return "size: number expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (let i = 0; i < message.points.length; ++i) {
                    let error = $root.game.DrawingPoint.verify(message.points[i], long + 1);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DrawingStroke message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DrawingStroke
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DrawingStroke} DrawingStroke
         */
        DrawingStroke.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.strokeId != null)
                message.strokeId = String(object.strokeId);
            if (object.tool != null)
                message.tool = String(object.tool);
            if (object.color != null)
                message.color = String(object.color);
            if (object.size != null)
                message.size = Number(object.size);
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".game.DrawingStroke.points: array expected");
                message.points = [];
                for (let i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".game.DrawingStroke.points: object expected");
                    message.points[i] = $root.game.DrawingPoint.fromObject(object.points[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DrawingStroke message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DrawingStroke
         * @static
         * @param {game.DrawingStroke} message DrawingStroke
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawingStroke.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults) {
                object.strokeId = "";
                object.tool = "";
                object.color = "";
                object.size = 0;
            }
            if (message.strokeId != null && message.hasOwnProperty("strokeId"))
                object.strokeId = message.strokeId;
            if (message.tool != null && message.hasOwnProperty("tool"))
                object.tool = message.tool;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = options.json && !isFinite(message.size) ? String(message.size) : message.size;
            if (message.points && message.points.length) {
                object.points = [];
                for (let j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.game.DrawingPoint.toObject(message.points[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this DrawingStroke to JSON.
         * @function toJSON
         * @memberof game.DrawingStroke
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawingStroke.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DrawingStroke
         * @function getTypeUrl
         * @memberof game.DrawingStroke
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DrawingStroke.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DrawingStroke";
        };

        return DrawingStroke;
    })();

    game.DrawingMessage = (function() {

        /**
         * Properties of a DrawingMessage.
         * @typedef {Object} game.DrawingMessage.$Properties
         * @property {string|null} [playerId] DrawingMessage playerId
         * @property {string|null} [type] DrawingMessage type
         * @property {boolean|null} [showToAll] DrawingMessage showToAll
         * @property {game.DrawingStroke.$Properties|null} [stroke] DrawingMessage stroke
         * @property {Array.<game.DrawingStroke.$Properties>|null} [strokes] DrawingMessage strokes
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DrawingMessage.
         * @memberof game
         * @interface IDrawingMessage
         * @augments game.DrawingMessage.$Properties
         * @deprecated Use game.DrawingMessage.$Properties instead.
         */

        /**
         * Shape of a DrawingMessage.
         * @typedef {game.DrawingMessage.$Properties} game.DrawingMessage.$Shape
         */

        /**
         * Constructs a new DrawingMessage.
         * @memberof game
         * @classdesc Represents a DrawingMessage.
         * @constructor
         * @param {game.DrawingMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DrawingMessage(properties) {
            this.strokes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawingMessage playerId.
         * @member {string} playerId
         * @memberof game.DrawingMessage
         * @instance
         */
        DrawingMessage.prototype.playerId = "";

        /**
         * DrawingMessage type.
         * @member {string} type
         * @memberof game.DrawingMessage
         * @instance
         */
        DrawingMessage.prototype.type = "";

        /**
         * DrawingMessage showToAll.
         * @member {boolean} showToAll
         * @memberof game.DrawingMessage
         * @instance
         */
        DrawingMessage.prototype.showToAll = false;

        /**
         * DrawingMessage stroke.
         * @member {game.DrawingStroke.$Properties|null|undefined} stroke
         * @memberof game.DrawingMessage
         * @instance
         */
        DrawingMessage.prototype.stroke = null;

        /**
         * DrawingMessage strokes.
         * @member {Array.<game.DrawingStroke.$Properties>} strokes
         * @memberof game.DrawingMessage
         * @instance
         */
        DrawingMessage.prototype.strokes = $util.emptyArray;

        /**
         * Creates a new DrawingMessage instance using the specified properties.
         * @function create
         * @memberof game.DrawingMessage
         * @static
         * @param {game.DrawingMessage.$Properties=} [properties] Properties to set
         * @returns {game.DrawingMessage} DrawingMessage instance
         * @type {{
         *   (properties: game.DrawingMessage.$Shape): game.DrawingMessage & game.DrawingMessage.$Shape;
         *   (properties?: game.DrawingMessage.$Properties): game.DrawingMessage;
         * }}
         */
        DrawingMessage.create = function create(properties) {
            return new DrawingMessage(properties);
        };

        /**
         * Encodes the specified DrawingMessage message. Does not implicitly {@link game.DrawingMessage.verify|verify} messages.
         * @function encode
         * @memberof game.DrawingMessage
         * @static
         * @param {game.DrawingMessage.$Properties} message DrawingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.showToAll != null && Object.hasOwnProperty.call(message, "showToAll"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.showToAll);
            if (message.stroke != null && Object.hasOwnProperty.call(message, "stroke"))
                $root.game.DrawingStroke.encode(message.stroke, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.strokes != null && message.strokes.length)
                for (let i = 0; i < message.strokes.length; ++i)
                    $root.game.DrawingStroke.encode(message.strokes[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DrawingMessage message, length delimited. Does not implicitly {@link game.DrawingMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DrawingMessage
         * @static
         * @param {game.DrawingMessage.$Properties} message DrawingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawingMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DrawingMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.DrawingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DrawingMessage & game.DrawingMessage.$Shape} DrawingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.showToAll = reader.bool();
                        break;
                    }
                case 4: {
                        message.stroke = $root.game.DrawingStroke.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 5: {
                        if (!(message.strokes && message.strokes.length))
                            message.strokes = [];
                        message.strokes.push($root.game.DrawingStroke.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawingMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DrawingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DrawingMessage & game.DrawingMessage.$Shape} DrawingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawingMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawingMessage message.
         * @function verify
         * @memberof game.DrawingMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawingMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.showToAll != null && message.hasOwnProperty("showToAll"))
                if (typeof message.showToAll !== "boolean")
                    return "showToAll: boolean expected";
            if (message.stroke != null && message.hasOwnProperty("stroke")) {
                let error = $root.game.DrawingStroke.verify(message.stroke, long + 1);
                if (error)
                    return "stroke." + error;
            }
            if (message.strokes != null && message.hasOwnProperty("strokes")) {
                if (!Array.isArray(message.strokes))
                    return "strokes: array expected";
                for (let i = 0; i < message.strokes.length; ++i) {
                    let error = $root.game.DrawingStroke.verify(message.strokes[i], long + 1);
                    if (error)
                        return "strokes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DrawingMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DrawingMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DrawingMessage} DrawingMessage
         */
        DrawingMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.showToAll != null)
                message.showToAll = Boolean(object.showToAll);
            if (object.stroke != null) {
                if (typeof object.stroke !== "object")
                    throw TypeError(".game.DrawingMessage.stroke: object expected");
                message.stroke = $root.game.DrawingStroke.fromObject(object.stroke, long + 1);
            }
            if (object.strokes) {
                if (!Array.isArray(object.strokes))
                    throw TypeError(".game.DrawingMessage.strokes: array expected");
                message.strokes = [];
                for (let i = 0; i < object.strokes.length; ++i) {
                    if (typeof object.strokes[i] !== "object")
                        throw TypeError(".game.DrawingMessage.strokes: object expected");
                    message.strokes[i] = $root.game.DrawingStroke.fromObject(object.strokes[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DrawingMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DrawingMessage
         * @static
         * @param {game.DrawingMessage} message DrawingMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawingMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.strokes = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.showToAll = false;
                object.stroke = null;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.showToAll != null && message.hasOwnProperty("showToAll"))
                object.showToAll = message.showToAll;
            if (message.stroke != null && message.hasOwnProperty("stroke"))
                object.stroke = $root.game.DrawingStroke.toObject(message.stroke, options, _depth + 1);
            if (message.strokes && message.strokes.length) {
                object.strokes = [];
                for (let j = 0; j < message.strokes.length; ++j)
                    object.strokes[j] = $root.game.DrawingStroke.toObject(message.strokes[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this DrawingMessage to JSON.
         * @function toJSON
         * @memberof game.DrawingMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawingMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DrawingMessage
         * @function getTypeUrl
         * @memberof game.DrawingMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DrawingMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DrawingMessage";
        };

        return DrawingMessage;
    })();

    game.AudioChunk = (function() {

        /**
         * Properties of an AudioChunk.
         * @typedef {Object} game.AudioChunk.$Properties
         * @property {string|null} [playerId] AudioChunk playerId
         * @property {Uint8Array|null} [data] AudioChunk data
         * @property {number|null} [sampleRate] AudioChunk sampleRate
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an AudioChunk.
         * @memberof game
         * @interface IAudioChunk
         * @augments game.AudioChunk.$Properties
         * @deprecated Use game.AudioChunk.$Properties instead.
         */

        /**
         * Shape of an AudioChunk.
         * @typedef {game.AudioChunk.$Properties} game.AudioChunk.$Shape
         */

        /**
         * Constructs a new AudioChunk.
         * @memberof game
         * @classdesc Represents an AudioChunk.
         * @constructor
         * @param {game.AudioChunk.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function AudioChunk(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AudioChunk playerId.
         * @member {string} playerId
         * @memberof game.AudioChunk
         * @instance
         */
        AudioChunk.prototype.playerId = "";

        /**
         * AudioChunk data.
         * @member {Uint8Array} data
         * @memberof game.AudioChunk
         * @instance
         */
        AudioChunk.prototype.data = $util.newBuffer([]);

        /**
         * AudioChunk sampleRate.
         * @member {number} sampleRate
         * @memberof game.AudioChunk
         * @instance
         */
        AudioChunk.prototype.sampleRate = 0;

        /**
         * Creates a new AudioChunk instance using the specified properties.
         * @function create
         * @memberof game.AudioChunk
         * @static
         * @param {game.AudioChunk.$Properties=} [properties] Properties to set
         * @returns {game.AudioChunk} AudioChunk instance
         * @type {{
         *   (properties: game.AudioChunk.$Shape): game.AudioChunk & game.AudioChunk.$Shape;
         *   (properties?: game.AudioChunk.$Properties): game.AudioChunk;
         * }}
         */
        AudioChunk.create = function create(properties) {
            return new AudioChunk(properties);
        };

        /**
         * Encodes the specified AudioChunk message. Does not implicitly {@link game.AudioChunk.verify|verify} messages.
         * @function encode
         * @memberof game.AudioChunk
         * @static
         * @param {game.AudioChunk.$Properties} message AudioChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioChunk.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sampleRate);
            return writer;
        };

        /**
         * Encodes the specified AudioChunk message, length delimited. Does not implicitly {@link game.AudioChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AudioChunk
         * @static
         * @param {game.AudioChunk.$Properties} message AudioChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AudioChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an AudioChunk message from the specified reader or buffer.
         * @function decode
         * @memberof game.AudioChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AudioChunk & game.AudioChunk.$Shape} AudioChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioChunk.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.sampleRate = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AudioChunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AudioChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AudioChunk & game.AudioChunk.$Shape} AudioChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AudioChunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AudioChunk message.
         * @function verify
         * @memberof game.AudioChunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AudioChunk.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                if (!$util.isInteger(message.sampleRate))
                    return "sampleRate: integer expected";
            return null;
        };

        /**
         * Creates an AudioChunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.AudioChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.AudioChunk} AudioChunk
         */
        AudioChunk.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.sampleRate != null)
                message.sampleRate = object.sampleRate | 0;
            return message;
        };

        /**
         * Creates a plain object from an AudioChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.AudioChunk
         * @static
         * @param {game.AudioChunk} message AudioChunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AudioChunk.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.sampleRate = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                object.sampleRate = message.sampleRate;
            return object;
        };

        /**
         * Converts this AudioChunk to JSON.
         * @function toJSON
         * @memberof game.AudioChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AudioChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for AudioChunk
         * @function getTypeUrl
         * @memberof game.AudioChunk
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AudioChunk.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.AudioChunk";
        };

        return AudioChunk;
    })();

    game.StateUpdate = (function() {

        /**
         * Properties of a StateUpdate.
         * @typedef {Object} game.StateUpdate.$Properties
         * @property {Array.<game.PlayerAction.$Properties>|null} [players] StateUpdate players
         * @property {string|null} [action] StateUpdate action
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a StateUpdate.
         * @memberof game
         * @interface IStateUpdate
         * @augments game.StateUpdate.$Properties
         * @deprecated Use game.StateUpdate.$Properties instead.
         */

        /**
         * Shape of a StateUpdate.
         * @typedef {game.StateUpdate.$Properties} game.StateUpdate.$Shape
         */

        /**
         * Constructs a new StateUpdate.
         * @memberof game
         * @classdesc Represents a StateUpdate.
         * @constructor
         * @param {game.StateUpdate.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function StateUpdate(properties) {
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateUpdate players.
         * @member {Array.<game.PlayerAction.$Properties>} players
         * @memberof game.StateUpdate
         * @instance
         */
        StateUpdate.prototype.players = $util.emptyArray;

        /**
         * StateUpdate action.
         * @member {string} action
         * @memberof game.StateUpdate
         * @instance
         */
        StateUpdate.prototype.action = "";

        /**
         * Creates a new StateUpdate instance using the specified properties.
         * @function create
         * @memberof game.StateUpdate
         * @static
         * @param {game.StateUpdate.$Properties=} [properties] Properties to set
         * @returns {game.StateUpdate} StateUpdate instance
         * @type {{
         *   (properties: game.StateUpdate.$Shape): game.StateUpdate & game.StateUpdate.$Shape;
         *   (properties?: game.StateUpdate.$Properties): game.StateUpdate;
         * }}
         */
        StateUpdate.create = function create(properties) {
            return new StateUpdate(properties);
        };

        /**
         * Encodes the specified StateUpdate message. Does not implicitly {@link game.StateUpdate.verify|verify} messages.
         * @function encode
         * @memberof game.StateUpdate
         * @static
         * @param {game.StateUpdate.$Properties} message StateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateUpdate.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.game.PlayerAction.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link game.StateUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StateUpdate
         * @static
         * @param {game.StateUpdate.$Properties} message StateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a StateUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof game.StateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StateUpdate & game.StateUpdate.$Shape} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateUpdate.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.game.PlayerAction.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 2: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StateUpdate & game.StateUpdate.$Shape} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateUpdate message.
         * @function verify
         * @memberof game.StateUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateUpdate.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (let i = 0; i < message.players.length; ++i) {
                    let error = $root.game.PlayerAction.verify(message.players[i], long + 1);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StateUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StateUpdate} StateUpdate
         */
        StateUpdate.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".game.StateUpdate.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".game.StateUpdate.players: object expected");
                    message.players[i] = $root.game.PlayerAction.fromObject(object.players[i], long + 1);
                }
            }
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StateUpdate
         * @static
         * @param {game.StateUpdate} message StateUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateUpdate.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults)
                object.action = "";
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.game.PlayerAction.toObject(message.players[j], options, _depth + 1);
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this StateUpdate to JSON.
         * @function toJSON
         * @memberof game.StateUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for StateUpdate
         * @function getTypeUrl
         * @memberof game.StateUpdate
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StateUpdate.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.StateUpdate";
        };

        return StateUpdate;
    })();

    game.NoteMessage = (function() {

        /**
         * Properties of a NoteMessage.
         * @typedef {Object} game.NoteMessage.$Properties
         * @property {string|null} [playerId] NoteMessage playerId
         * @property {string|null} [playerName] NoteMessage playerName
         * @property {string|null} [noteId] NoteMessage noteId
         * @property {string|null} [type] NoteMessage type
         * @property {string|null} [title] NoteMessage title
         * @property {string|null} [content] NoteMessage content
         * @property {string|null} [templateId] NoteMessage templateId
         * @property {Array.<game.NotePermission.$Properties>|null} [permissions] NoteMessage permissions
         * @property {string|null} [roomId] NoteMessage roomId
         * @property {Array.<game.NoteMessage.$Properties>|null} [notes] NoteMessage notes
         * @property {string|null} [linkedStatsOwnerId] NoteMessage linkedStatsOwnerId
         * @property {number|null} [selectionAnchor] NoteMessage selectionAnchor
         * @property {number|null} [selectionHead] NoteMessage selectionHead
         * @property {number|null} [tabIndex] NoteMessage tabIndex
         * @property {boolean|null} [active] NoteMessage active
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a NoteMessage.
         * @memberof game
         * @interface INoteMessage
         * @augments game.NoteMessage.$Properties
         * @deprecated Use game.NoteMessage.$Properties instead.
         */

        /**
         * Shape of a NoteMessage.
         * @typedef {game.NoteMessage.$Properties} game.NoteMessage.$Shape
         */

        /**
         * Constructs a new NoteMessage.
         * @memberof game
         * @classdesc Represents a NoteMessage.
         * @constructor
         * @param {game.NoteMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function NoteMessage(properties) {
            this.permissions = [];
            this.notes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoteMessage playerId.
         * @member {string} playerId
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.playerId = "";

        /**
         * NoteMessage playerName.
         * @member {string} playerName
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.playerName = "";

        /**
         * NoteMessage noteId.
         * @member {string} noteId
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.noteId = "";

        /**
         * NoteMessage type.
         * @member {string} type
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.type = "";

        /**
         * NoteMessage title.
         * @member {string} title
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.title = "";

        /**
         * NoteMessage content.
         * @member {string} content
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.content = "";

        /**
         * NoteMessage templateId.
         * @member {string} templateId
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.templateId = "";

        /**
         * NoteMessage permissions.
         * @member {Array.<game.NotePermission.$Properties>} permissions
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.permissions = $util.emptyArray;

        /**
         * NoteMessage roomId.
         * @member {string} roomId
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.roomId = "";

        /**
         * NoteMessage notes.
         * @member {Array.<game.NoteMessage.$Properties>} notes
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.notes = $util.emptyArray;

        /**
         * NoteMessage linkedStatsOwnerId.
         * @member {string} linkedStatsOwnerId
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.linkedStatsOwnerId = "";

        /**
         * NoteMessage selectionAnchor.
         * @member {number} selectionAnchor
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.selectionAnchor = 0;

        /**
         * NoteMessage selectionHead.
         * @member {number} selectionHead
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.selectionHead = 0;

        /**
         * NoteMessage tabIndex.
         * @member {number} tabIndex
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.tabIndex = 0;

        /**
         * NoteMessage active.
         * @member {boolean} active
         * @memberof game.NoteMessage
         * @instance
         */
        NoteMessage.prototype.active = false;

        /**
         * Creates a new NoteMessage instance using the specified properties.
         * @function create
         * @memberof game.NoteMessage
         * @static
         * @param {game.NoteMessage.$Properties=} [properties] Properties to set
         * @returns {game.NoteMessage} NoteMessage instance
         * @type {{
         *   (properties: game.NoteMessage.$Shape): game.NoteMessage & game.NoteMessage.$Shape;
         *   (properties?: game.NoteMessage.$Properties): game.NoteMessage;
         * }}
         */
        NoteMessage.create = function create(properties) {
            return new NoteMessage(properties);
        };

        /**
         * Encodes the specified NoteMessage message. Does not implicitly {@link game.NoteMessage.verify|verify} messages.
         * @function encode
         * @memberof game.NoteMessage
         * @static
         * @param {game.NoteMessage.$Properties} message NoteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoteMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.noteId != null && Object.hasOwnProperty.call(message, "noteId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.noteId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
            if (message.templateId != null && Object.hasOwnProperty.call(message, "templateId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.templateId);
            if (message.permissions != null && message.permissions.length)
                for (let i = 0; i < message.permissions.length; ++i)
                    $root.game.NotePermission.encode(message.permissions[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.roomId);
            if (message.notes != null && message.notes.length)
                for (let i = 0; i < message.notes.length; ++i)
                    $root.game.NoteMessage.encode(message.notes[i], writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.linkedStatsOwnerId != null && Object.hasOwnProperty.call(message, "linkedStatsOwnerId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.linkedStatsOwnerId);
            if (message.selectionAnchor != null && Object.hasOwnProperty.call(message, "selectionAnchor"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.selectionAnchor);
            if (message.selectionHead != null && Object.hasOwnProperty.call(message, "selectionHead"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.selectionHead);
            if (message.tabIndex != null && Object.hasOwnProperty.call(message, "tabIndex"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.tabIndex);
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.active);
            return writer;
        };

        /**
         * Encodes the specified NoteMessage message, length delimited. Does not implicitly {@link game.NoteMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.NoteMessage
         * @static
         * @param {game.NoteMessage.$Properties} message NoteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoteMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a NoteMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.NoteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.NoteMessage & game.NoteMessage.$Shape} NoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoteMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.noteId = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                case 5: {
                        message.title = reader.string();
                        break;
                    }
                case 6: {
                        message.content = reader.string();
                        break;
                    }
                case 7: {
                        message.templateId = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.permissions && message.permissions.length))
                            message.permissions = [];
                        message.permissions.push($root.game.NotePermission.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 9: {
                        message.roomId = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.notes && message.notes.length))
                            message.notes = [];
                        message.notes.push($root.game.NoteMessage.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 11: {
                        message.linkedStatsOwnerId = reader.string();
                        break;
                    }
                case 12: {
                        message.selectionAnchor = reader.int32();
                        break;
                    }
                case 13: {
                        message.selectionHead = reader.int32();
                        break;
                    }
                case 14: {
                        message.tabIndex = reader.int32();
                        break;
                    }
                case 15: {
                        message.active = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoteMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.NoteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.NoteMessage & game.NoteMessage.$Shape} NoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoteMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoteMessage message.
         * @function verify
         * @memberof game.NoteMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoteMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.noteId != null && message.hasOwnProperty("noteId"))
                if (!$util.isString(message.noteId))
                    return "noteId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.templateId != null && message.hasOwnProperty("templateId"))
                if (!$util.isString(message.templateId))
                    return "templateId: string expected";
            if (message.permissions != null && message.hasOwnProperty("permissions")) {
                if (!Array.isArray(message.permissions))
                    return "permissions: array expected";
                for (let i = 0; i < message.permissions.length; ++i) {
                    let error = $root.game.NotePermission.verify(message.permissions[i], long + 1);
                    if (error)
                        return "permissions." + error;
                }
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.notes != null && message.hasOwnProperty("notes")) {
                if (!Array.isArray(message.notes))
                    return "notes: array expected";
                for (let i = 0; i < message.notes.length; ++i) {
                    let error = $root.game.NoteMessage.verify(message.notes[i], long + 1);
                    if (error)
                        return "notes." + error;
                }
            }
            if (message.linkedStatsOwnerId != null && message.hasOwnProperty("linkedStatsOwnerId"))
                if (!$util.isString(message.linkedStatsOwnerId))
                    return "linkedStatsOwnerId: string expected";
            if (message.selectionAnchor != null && message.hasOwnProperty("selectionAnchor"))
                if (!$util.isInteger(message.selectionAnchor))
                    return "selectionAnchor: integer expected";
            if (message.selectionHead != null && message.hasOwnProperty("selectionHead"))
                if (!$util.isInteger(message.selectionHead))
                    return "selectionHead: integer expected";
            if (message.tabIndex != null && message.hasOwnProperty("tabIndex"))
                if (!$util.isInteger(message.tabIndex))
                    return "tabIndex: integer expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };

        /**
         * Creates a NoteMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.NoteMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.NoteMessage} NoteMessage
         */
        NoteMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.noteId != null)
                message.noteId = String(object.noteId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.templateId != null)
                message.templateId = String(object.templateId);
            if (object.permissions) {
                if (!Array.isArray(object.permissions))
                    throw TypeError(".game.NoteMessage.permissions: array expected");
                message.permissions = [];
                for (let i = 0; i < object.permissions.length; ++i) {
                    if (typeof object.permissions[i] !== "object")
                        throw TypeError(".game.NoteMessage.permissions: object expected");
                    message.permissions[i] = $root.game.NotePermission.fromObject(object.permissions[i], long + 1);
                }
            }
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.notes) {
                if (!Array.isArray(object.notes))
                    throw TypeError(".game.NoteMessage.notes: array expected");
                message.notes = [];
                for (let i = 0; i < object.notes.length; ++i) {
                    if (typeof object.notes[i] !== "object")
                        throw TypeError(".game.NoteMessage.notes: object expected");
                    message.notes[i] = $root.game.NoteMessage.fromObject(object.notes[i], long + 1);
                }
            }
            if (object.linkedStatsOwnerId != null)
                message.linkedStatsOwnerId = String(object.linkedStatsOwnerId);
            if (object.selectionAnchor != null)
                message.selectionAnchor = object.selectionAnchor | 0;
            if (object.selectionHead != null)
                message.selectionHead = object.selectionHead | 0;
            if (object.tabIndex != null)
                message.tabIndex = object.tabIndex | 0;
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };

        /**
         * Creates a plain object from a NoteMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.NoteMessage
         * @static
         * @param {game.NoteMessage} message NoteMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoteMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.permissions = [];
                object.notes = [];
            }
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.noteId = "";
                object.type = "";
                object.title = "";
                object.content = "";
                object.templateId = "";
                object.roomId = "";
                object.linkedStatsOwnerId = "";
                object.selectionAnchor = 0;
                object.selectionHead = 0;
                object.tabIndex = 0;
                object.active = false;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.noteId != null && message.hasOwnProperty("noteId"))
                object.noteId = message.noteId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.templateId != null && message.hasOwnProperty("templateId"))
                object.templateId = message.templateId;
            if (message.permissions && message.permissions.length) {
                object.permissions = [];
                for (let j = 0; j < message.permissions.length; ++j)
                    object.permissions[j] = $root.game.NotePermission.toObject(message.permissions[j], options, _depth + 1);
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.notes && message.notes.length) {
                object.notes = [];
                for (let j = 0; j < message.notes.length; ++j)
                    object.notes[j] = $root.game.NoteMessage.toObject(message.notes[j], options, _depth + 1);
            }
            if (message.linkedStatsOwnerId != null && message.hasOwnProperty("linkedStatsOwnerId"))
                object.linkedStatsOwnerId = message.linkedStatsOwnerId;
            if (message.selectionAnchor != null && message.hasOwnProperty("selectionAnchor"))
                object.selectionAnchor = message.selectionAnchor;
            if (message.selectionHead != null && message.hasOwnProperty("selectionHead"))
                object.selectionHead = message.selectionHead;
            if (message.tabIndex != null && message.hasOwnProperty("tabIndex"))
                object.tabIndex = message.tabIndex;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };

        /**
         * Converts this NoteMessage to JSON.
         * @function toJSON
         * @memberof game.NoteMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoteMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for NoteMessage
         * @function getTypeUrl
         * @memberof game.NoteMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NoteMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.NoteMessage";
        };

        return NoteMessage;
    })();

    game.NotePermission = (function() {

        /**
         * Properties of a NotePermission.
         * @typedef {Object} game.NotePermission.$Properties
         * @property {string|null} [playerId] NotePermission playerId
         * @property {string|null} [playerName] NotePermission playerName
         * @property {boolean|null} [canEdit] NotePermission canEdit
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a NotePermission.
         * @memberof game
         * @interface INotePermission
         * @augments game.NotePermission.$Properties
         * @deprecated Use game.NotePermission.$Properties instead.
         */

        /**
         * Shape of a NotePermission.
         * @typedef {game.NotePermission.$Properties} game.NotePermission.$Shape
         */

        /**
         * Constructs a new NotePermission.
         * @memberof game
         * @classdesc Represents a NotePermission.
         * @constructor
         * @param {game.NotePermission.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function NotePermission(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotePermission playerId.
         * @member {string} playerId
         * @memberof game.NotePermission
         * @instance
         */
        NotePermission.prototype.playerId = "";

        /**
         * NotePermission playerName.
         * @member {string} playerName
         * @memberof game.NotePermission
         * @instance
         */
        NotePermission.prototype.playerName = "";

        /**
         * NotePermission canEdit.
         * @member {boolean} canEdit
         * @memberof game.NotePermission
         * @instance
         */
        NotePermission.prototype.canEdit = false;

        /**
         * Creates a new NotePermission instance using the specified properties.
         * @function create
         * @memberof game.NotePermission
         * @static
         * @param {game.NotePermission.$Properties=} [properties] Properties to set
         * @returns {game.NotePermission} NotePermission instance
         * @type {{
         *   (properties: game.NotePermission.$Shape): game.NotePermission & game.NotePermission.$Shape;
         *   (properties?: game.NotePermission.$Properties): game.NotePermission;
         * }}
         */
        NotePermission.create = function create(properties) {
            return new NotePermission(properties);
        };

        /**
         * Encodes the specified NotePermission message. Does not implicitly {@link game.NotePermission.verify|verify} messages.
         * @function encode
         * @memberof game.NotePermission
         * @static
         * @param {game.NotePermission.$Properties} message NotePermission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotePermission.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.canEdit != null && Object.hasOwnProperty.call(message, "canEdit"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.canEdit);
            return writer;
        };

        /**
         * Encodes the specified NotePermission message, length delimited. Does not implicitly {@link game.NotePermission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.NotePermission
         * @static
         * @param {game.NotePermission.$Properties} message NotePermission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotePermission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a NotePermission message from the specified reader or buffer.
         * @function decode
         * @memberof game.NotePermission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.NotePermission & game.NotePermission.$Shape} NotePermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotePermission.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.canEdit = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotePermission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.NotePermission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.NotePermission & game.NotePermission.$Shape} NotePermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotePermission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotePermission message.
         * @function verify
         * @memberof game.NotePermission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotePermission.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.canEdit != null && message.hasOwnProperty("canEdit"))
                if (typeof message.canEdit !== "boolean")
                    return "canEdit: boolean expected";
            return null;
        };

        /**
         * Creates a NotePermission message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.NotePermission
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.NotePermission} NotePermission
         */
        NotePermission.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.canEdit != null)
                message.canEdit = Boolean(object.canEdit);
            return message;
        };

        /**
         * Creates a plain object from a NotePermission message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.NotePermission
         * @static
         * @param {game.NotePermission} message NotePermission
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotePermission.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.canEdit = false;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.canEdit != null && message.hasOwnProperty("canEdit"))
                object.canEdit = message.canEdit;
            return object;
        };

        /**
         * Converts this NotePermission to JSON.
         * @function toJSON
         * @memberof game.NotePermission
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotePermission.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for NotePermission
         * @function getTypeUrl
         * @memberof game.NotePermission
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NotePermission.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.NotePermission";
        };

        return NotePermission;
    })();

    game.TemplateMessage = (function() {

        /**
         * Properties of a TemplateMessage.
         * @typedef {Object} game.TemplateMessage.$Properties
         * @property {string|null} [playerId] TemplateMessage playerId
         * @property {string|null} [playerName] TemplateMessage playerName
         * @property {string|null} [templateId] TemplateMessage templateId
         * @property {string|null} [type] TemplateMessage type
         * @property {string|null} [title] TemplateMessage title
         * @property {string|null} [content] TemplateMessage content
         * @property {string|null} [targetPlayerId] TemplateMessage targetPlayerId
         * @property {string|null} [targetPlayerName] TemplateMessage targetPlayerName
         * @property {boolean|null} [approved] TemplateMessage approved
         * @property {Array.<game.TemplateMessage.$Properties>|null} [templates] TemplateMessage templates
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a TemplateMessage.
         * @memberof game
         * @interface ITemplateMessage
         * @augments game.TemplateMessage.$Properties
         * @deprecated Use game.TemplateMessage.$Properties instead.
         */

        /**
         * Shape of a TemplateMessage.
         * @typedef {game.TemplateMessage.$Properties} game.TemplateMessage.$Shape
         */

        /**
         * Constructs a new TemplateMessage.
         * @memberof game
         * @classdesc Represents a TemplateMessage.
         * @constructor
         * @param {game.TemplateMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function TemplateMessage(properties) {
            this.templates = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TemplateMessage playerId.
         * @member {string} playerId
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.playerId = "";

        /**
         * TemplateMessage playerName.
         * @member {string} playerName
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.playerName = "";

        /**
         * TemplateMessage templateId.
         * @member {string} templateId
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.templateId = "";

        /**
         * TemplateMessage type.
         * @member {string} type
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.type = "";

        /**
         * TemplateMessage title.
         * @member {string} title
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.title = "";

        /**
         * TemplateMessage content.
         * @member {string} content
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.content = "";

        /**
         * TemplateMessage targetPlayerId.
         * @member {string} targetPlayerId
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.targetPlayerId = "";

        /**
         * TemplateMessage targetPlayerName.
         * @member {string} targetPlayerName
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.targetPlayerName = "";

        /**
         * TemplateMessage approved.
         * @member {boolean} approved
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.approved = false;

        /**
         * TemplateMessage templates.
         * @member {Array.<game.TemplateMessage.$Properties>} templates
         * @memberof game.TemplateMessage
         * @instance
         */
        TemplateMessage.prototype.templates = $util.emptyArray;

        /**
         * Creates a new TemplateMessage instance using the specified properties.
         * @function create
         * @memberof game.TemplateMessage
         * @static
         * @param {game.TemplateMessage.$Properties=} [properties] Properties to set
         * @returns {game.TemplateMessage} TemplateMessage instance
         * @type {{
         *   (properties: game.TemplateMessage.$Shape): game.TemplateMessage & game.TemplateMessage.$Shape;
         *   (properties?: game.TemplateMessage.$Properties): game.TemplateMessage;
         * }}
         */
        TemplateMessage.create = function create(properties) {
            return new TemplateMessage(properties);
        };

        /**
         * Encodes the specified TemplateMessage message. Does not implicitly {@link game.TemplateMessage.verify|verify} messages.
         * @function encode
         * @memberof game.TemplateMessage
         * @static
         * @param {game.TemplateMessage.$Properties} message TemplateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.templateId != null && Object.hasOwnProperty.call(message, "templateId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.templateId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
            if (message.targetPlayerId != null && Object.hasOwnProperty.call(message, "targetPlayerId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.targetPlayerId);
            if (message.targetPlayerName != null && Object.hasOwnProperty.call(message, "targetPlayerName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.targetPlayerName);
            if (message.approved != null && Object.hasOwnProperty.call(message, "approved"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.approved);
            if (message.templates != null && message.templates.length)
                for (let i = 0; i < message.templates.length; ++i)
                    $root.game.TemplateMessage.encode(message.templates[i], writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TemplateMessage message, length delimited. Does not implicitly {@link game.TemplateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TemplateMessage
         * @static
         * @param {game.TemplateMessage.$Properties} message TemplateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemplateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.TemplateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TemplateMessage & game.TemplateMessage.$Shape} TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.templateId = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                case 5: {
                        message.title = reader.string();
                        break;
                    }
                case 6: {
                        message.content = reader.string();
                        break;
                    }
                case 7: {
                        message.targetPlayerId = reader.string();
                        break;
                    }
                case 8: {
                        message.targetPlayerName = reader.string();
                        break;
                    }
                case 9: {
                        message.approved = reader.bool();
                        break;
                    }
                case 10: {
                        if (!(message.templates && message.templates.length))
                            message.templates = [];
                        message.templates.push($root.game.TemplateMessage.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TemplateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TemplateMessage & game.TemplateMessage.$Shape} TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemplateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TemplateMessage message.
         * @function verify
         * @memberof game.TemplateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TemplateMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.templateId != null && message.hasOwnProperty("templateId"))
                if (!$util.isString(message.templateId))
                    return "templateId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                if (!$util.isString(message.targetPlayerId))
                    return "targetPlayerId: string expected";
            if (message.targetPlayerName != null && message.hasOwnProperty("targetPlayerName"))
                if (!$util.isString(message.targetPlayerName))
                    return "targetPlayerName: string expected";
            if (message.approved != null && message.hasOwnProperty("approved"))
                if (typeof message.approved !== "boolean")
                    return "approved: boolean expected";
            if (message.templates != null && message.hasOwnProperty("templates")) {
                if (!Array.isArray(message.templates))
                    return "templates: array expected";
                for (let i = 0; i < message.templates.length; ++i) {
                    let error = $root.game.TemplateMessage.verify(message.templates[i], long + 1);
                    if (error)
                        return "templates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TemplateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TemplateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TemplateMessage} TemplateMessage
         */
        TemplateMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.templateId != null)
                message.templateId = String(object.templateId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.targetPlayerId != null)
                message.targetPlayerId = String(object.targetPlayerId);
            if (object.targetPlayerName != null)
                message.targetPlayerName = String(object.targetPlayerName);
            if (object.approved != null)
                message.approved = Boolean(object.approved);
            if (object.templates) {
                if (!Array.isArray(object.templates))
                    throw TypeError(".game.TemplateMessage.templates: array expected");
                message.templates = [];
                for (let i = 0; i < object.templates.length; ++i) {
                    if (typeof object.templates[i] !== "object")
                        throw TypeError(".game.TemplateMessage.templates: object expected");
                    message.templates[i] = $root.game.TemplateMessage.fromObject(object.templates[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TemplateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TemplateMessage
         * @static
         * @param {game.TemplateMessage} message TemplateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TemplateMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.templates = [];
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.templateId = "";
                object.type = "";
                object.title = "";
                object.content = "";
                object.targetPlayerId = "";
                object.targetPlayerName = "";
                object.approved = false;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.templateId != null && message.hasOwnProperty("templateId"))
                object.templateId = message.templateId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.targetPlayerId != null && message.hasOwnProperty("targetPlayerId"))
                object.targetPlayerId = message.targetPlayerId;
            if (message.targetPlayerName != null && message.hasOwnProperty("targetPlayerName"))
                object.targetPlayerName = message.targetPlayerName;
            if (message.approved != null && message.hasOwnProperty("approved"))
                object.approved = message.approved;
            if (message.templates && message.templates.length) {
                object.templates = [];
                for (let j = 0; j < message.templates.length; ++j)
                    object.templates[j] = $root.game.TemplateMessage.toObject(message.templates[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this TemplateMessage to JSON.
         * @function toJSON
         * @memberof game.TemplateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TemplateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for TemplateMessage
         * @function getTypeUrl
         * @memberof game.TemplateMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TemplateMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.TemplateMessage";
        };

        return TemplateMessage;
    })();

    game.RoomSettingMessage = (function() {

        /**
         * Properties of a RoomSettingMessage.
         * @typedef {Object} game.RoomSettingMessage.$Properties
         * @property {string|null} [playerId] RoomSettingMessage playerId
         * @property {string|null} [type] RoomSettingMessage type
         * @property {boolean|null} [value] RoomSettingMessage value
         * @property {string|null} [stringValue] RoomSettingMessage stringValue
         * @property {number|null} [floatValue] RoomSettingMessage floatValue
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RoomSettingMessage.
         * @memberof game
         * @interface IRoomSettingMessage
         * @augments game.RoomSettingMessage.$Properties
         * @deprecated Use game.RoomSettingMessage.$Properties instead.
         */

        /**
         * Shape of a RoomSettingMessage.
         * @typedef {game.RoomSettingMessage.$Properties} game.RoomSettingMessage.$Shape
         */

        /**
         * Constructs a new RoomSettingMessage.
         * @memberof game
         * @classdesc Represents a RoomSettingMessage.
         * @constructor
         * @param {game.RoomSettingMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RoomSettingMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomSettingMessage playerId.
         * @member {string} playerId
         * @memberof game.RoomSettingMessage
         * @instance
         */
        RoomSettingMessage.prototype.playerId = "";

        /**
         * RoomSettingMessage type.
         * @member {string} type
         * @memberof game.RoomSettingMessage
         * @instance
         */
        RoomSettingMessage.prototype.type = "";

        /**
         * RoomSettingMessage value.
         * @member {boolean} value
         * @memberof game.RoomSettingMessage
         * @instance
         */
        RoomSettingMessage.prototype.value = false;

        /**
         * RoomSettingMessage stringValue.
         * @member {string} stringValue
         * @memberof game.RoomSettingMessage
         * @instance
         */
        RoomSettingMessage.prototype.stringValue = "";

        /**
         * RoomSettingMessage floatValue.
         * @member {number} floatValue
         * @memberof game.RoomSettingMessage
         * @instance
         */
        RoomSettingMessage.prototype.floatValue = 0;

        /**
         * Creates a new RoomSettingMessage instance using the specified properties.
         * @function create
         * @memberof game.RoomSettingMessage
         * @static
         * @param {game.RoomSettingMessage.$Properties=} [properties] Properties to set
         * @returns {game.RoomSettingMessage} RoomSettingMessage instance
         * @type {{
         *   (properties: game.RoomSettingMessage.$Shape): game.RoomSettingMessage & game.RoomSettingMessage.$Shape;
         *   (properties?: game.RoomSettingMessage.$Properties): game.RoomSettingMessage;
         * }}
         */
        RoomSettingMessage.create = function create(properties) {
            return new RoomSettingMessage(properties);
        };

        /**
         * Encodes the specified RoomSettingMessage message. Does not implicitly {@link game.RoomSettingMessage.verify|verify} messages.
         * @function encode
         * @memberof game.RoomSettingMessage
         * @static
         * @param {game.RoomSettingMessage.$Properties} message RoomSettingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSettingMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.value);
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.stringValue);
            if (message.floatValue != null && Object.hasOwnProperty.call(message, "floatValue"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.floatValue);
            return writer;
        };

        /**
         * Encodes the specified RoomSettingMessage message, length delimited. Does not implicitly {@link game.RoomSettingMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RoomSettingMessage
         * @static
         * @param {game.RoomSettingMessage.$Properties} message RoomSettingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSettingMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RoomSettingMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.RoomSettingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RoomSettingMessage & game.RoomSettingMessage.$Shape} RoomSettingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSettingMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.value = reader.bool();
                        break;
                    }
                case 4: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 5: {
                        message.floatValue = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomSettingMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RoomSettingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RoomSettingMessage & game.RoomSettingMessage.$Shape} RoomSettingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSettingMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomSettingMessage message.
         * @function verify
         * @memberof game.RoomSettingMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomSettingMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                if (typeof message.floatValue !== "number")
                    return "floatValue: number expected";
            return null;
        };

        /**
         * Creates a RoomSettingMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RoomSettingMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RoomSettingMessage} RoomSettingMessage
         */
        RoomSettingMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.value != null)
                message.value = Boolean(object.value);
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.floatValue != null)
                message.floatValue = Number(object.floatValue);
            return message;
        };

        /**
         * Creates a plain object from a RoomSettingMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RoomSettingMessage
         * @static
         * @param {game.RoomSettingMessage} message RoomSettingMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomSettingMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.value = false;
                object.stringValue = "";
                object.floatValue = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                object.stringValue = message.stringValue;
            if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
            return object;
        };

        /**
         * Converts this RoomSettingMessage to JSON.
         * @function toJSON
         * @memberof game.RoomSettingMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomSettingMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RoomSettingMessage
         * @function getTypeUrl
         * @memberof game.RoomSettingMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RoomSettingMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RoomSettingMessage";
        };

        return RoomSettingMessage;
    })();

    game.UserListMessage = (function() {

        /**
         * Properties of a UserListMessage.
         * @typedef {Object} game.UserListMessage.$Properties
         * @property {string|null} [playerId] UserListMessage playerId
         * @property {string|null} [type] UserListMessage type
         * @property {Array.<game.PlayerInfo.$Properties>|null} [players] UserListMessage players
         * @property {game.PlayerPermission.$Properties|null} [permission] UserListMessage permission
         * @property {game.PlayerPermission.$Properties|null} [globalPermission] UserListMessage globalPermission
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a UserListMessage.
         * @memberof game
         * @interface IUserListMessage
         * @augments game.UserListMessage.$Properties
         * @deprecated Use game.UserListMessage.$Properties instead.
         */

        /**
         * Shape of a UserListMessage.
         * @typedef {game.UserListMessage.$Properties} game.UserListMessage.$Shape
         */

        /**
         * Constructs a new UserListMessage.
         * @memberof game
         * @classdesc Represents a UserListMessage.
         * @constructor
         * @param {game.UserListMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function UserListMessage(properties) {
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserListMessage playerId.
         * @member {string} playerId
         * @memberof game.UserListMessage
         * @instance
         */
        UserListMessage.prototype.playerId = "";

        /**
         * UserListMessage type.
         * @member {string} type
         * @memberof game.UserListMessage
         * @instance
         */
        UserListMessage.prototype.type = "";

        /**
         * UserListMessage players.
         * @member {Array.<game.PlayerInfo.$Properties>} players
         * @memberof game.UserListMessage
         * @instance
         */
        UserListMessage.prototype.players = $util.emptyArray;

        /**
         * UserListMessage permission.
         * @member {game.PlayerPermission.$Properties|null|undefined} permission
         * @memberof game.UserListMessage
         * @instance
         */
        UserListMessage.prototype.permission = null;

        /**
         * UserListMessage globalPermission.
         * @member {game.PlayerPermission.$Properties|null|undefined} globalPermission
         * @memberof game.UserListMessage
         * @instance
         */
        UserListMessage.prototype.globalPermission = null;

        /**
         * Creates a new UserListMessage instance using the specified properties.
         * @function create
         * @memberof game.UserListMessage
         * @static
         * @param {game.UserListMessage.$Properties=} [properties] Properties to set
         * @returns {game.UserListMessage} UserListMessage instance
         * @type {{
         *   (properties: game.UserListMessage.$Shape): game.UserListMessage & game.UserListMessage.$Shape;
         *   (properties?: game.UserListMessage.$Properties): game.UserListMessage;
         * }}
         */
        UserListMessage.create = function create(properties) {
            return new UserListMessage(properties);
        };

        /**
         * Encodes the specified UserListMessage message. Does not implicitly {@link game.UserListMessage.verify|verify} messages.
         * @function encode
         * @memberof game.UserListMessage
         * @static
         * @param {game.UserListMessage.$Properties} message UserListMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.game.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                $root.game.PlayerPermission.encode(message.permission, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.globalPermission != null && Object.hasOwnProperty.call(message, "globalPermission"))
                $root.game.PlayerPermission.encode(message.globalPermission, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserListMessage message, length delimited. Does not implicitly {@link game.UserListMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserListMessage
         * @static
         * @param {game.UserListMessage.$Properties} message UserListMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a UserListMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserListMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserListMessage & game.UserListMessage.$Shape} UserListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.game.PlayerInfo.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 4: {
                        message.permission = $root.game.PlayerPermission.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 5: {
                        message.globalPermission = $root.game.PlayerPermission.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserListMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserListMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserListMessage & game.UserListMessage.$Shape} UserListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserListMessage message.
         * @function verify
         * @memberof game.UserListMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserListMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (let i = 0; i < message.players.length; ++i) {
                    let error = $root.game.PlayerInfo.verify(message.players[i], long + 1);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.permission != null && message.hasOwnProperty("permission")) {
                let error = $root.game.PlayerPermission.verify(message.permission, long + 1);
                if (error)
                    return "permission." + error;
            }
            if (message.globalPermission != null && message.hasOwnProperty("globalPermission")) {
                let error = $root.game.PlayerPermission.verify(message.globalPermission, long + 1);
                if (error)
                    return "globalPermission." + error;
            }
            return null;
        };

        /**
         * Creates a UserListMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserListMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserListMessage} UserListMessage
         */
        UserListMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.type != null)
                message.type = String(object.type);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".game.UserListMessage.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".game.UserListMessage.players: object expected");
                    message.players[i] = $root.game.PlayerInfo.fromObject(object.players[i], long + 1);
                }
            }
            if (object.permission != null) {
                if (typeof object.permission !== "object")
                    throw TypeError(".game.UserListMessage.permission: object expected");
                message.permission = $root.game.PlayerPermission.fromObject(object.permission, long + 1);
            }
            if (object.globalPermission != null) {
                if (typeof object.globalPermission !== "object")
                    throw TypeError(".game.UserListMessage.globalPermission: object expected");
                message.globalPermission = $root.game.PlayerPermission.fromObject(object.globalPermission, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserListMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserListMessage
         * @static
         * @param {game.UserListMessage} message UserListMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserListMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.playerId = "";
                object.type = "";
                object.permission = null;
                object.globalPermission = null;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.game.PlayerInfo.toObject(message.players[j], options, _depth + 1);
            }
            if (message.permission != null && message.hasOwnProperty("permission"))
                object.permission = $root.game.PlayerPermission.toObject(message.permission, options, _depth + 1);
            if (message.globalPermission != null && message.hasOwnProperty("globalPermission"))
                object.globalPermission = $root.game.PlayerPermission.toObject(message.globalPermission, options, _depth + 1);
            return object;
        };

        /**
         * Converts this UserListMessage to JSON.
         * @function toJSON
         * @memberof game.UserListMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserListMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserListMessage
         * @function getTypeUrl
         * @memberof game.UserListMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserListMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.UserListMessage";
        };

        return UserListMessage;
    })();

    game.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @typedef {Object} game.PlayerInfo.$Properties
         * @property {string|null} [playerId] PlayerInfo playerId
         * @property {string|null} [playerName] PlayerInfo playerName
         * @property {boolean|null} [isRoomMaster] PlayerInfo isRoomMaster
         * @property {boolean|null} [online] PlayerInfo online
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerInfo.
         * @memberof game
         * @interface IPlayerInfo
         * @augments game.PlayerInfo.$Properties
         * @deprecated Use game.PlayerInfo.$Properties instead.
         */

        /**
         * Shape of a PlayerInfo.
         * @typedef {game.PlayerInfo.$Properties} game.PlayerInfo.$Shape
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof game
         * @classdesc Represents a PlayerInfo.
         * @constructor
         * @param {game.PlayerInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo playerId.
         * @member {string} playerId
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerId = "";

        /**
         * PlayerInfo playerName.
         * @member {string} playerName
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerName = "";

        /**
         * PlayerInfo isRoomMaster.
         * @member {boolean} isRoomMaster
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isRoomMaster = false;

        /**
         * PlayerInfo online.
         * @member {boolean} online
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.online = false;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof game.PlayerInfo
         * @static
         * @param {game.PlayerInfo.$Properties=} [properties] Properties to set
         * @returns {game.PlayerInfo} PlayerInfo instance
         * @type {{
         *   (properties: game.PlayerInfo.$Shape): game.PlayerInfo & game.PlayerInfo.$Shape;
         *   (properties?: game.PlayerInfo.$Properties): game.PlayerInfo;
         * }}
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerInfo
         * @static
         * @param {game.PlayerInfo.$Properties} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.isRoomMaster != null && Object.hasOwnProperty.call(message, "isRoomMaster"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isRoomMaster);
            if (message.online != null && Object.hasOwnProperty.call(message, "online"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.online);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerInfo
         * @static
         * @param {game.PlayerInfo.$Properties} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerInfo & game.PlayerInfo.$Shape} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.isRoomMaster = reader.bool();
                        break;
                    }
                case 4: {
                        message.online = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerInfo & game.PlayerInfo.$Shape} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof game.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.isRoomMaster != null && message.hasOwnProperty("isRoomMaster"))
                if (typeof message.isRoomMaster !== "boolean")
                    return "isRoomMaster: boolean expected";
            if (message.online != null && message.hasOwnProperty("online"))
                if (typeof message.online !== "boolean")
                    return "online: boolean expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.isRoomMaster != null)
                message.isRoomMaster = Boolean(object.isRoomMaster);
            if (object.online != null)
                message.online = Boolean(object.online);
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerInfo
         * @static
         * @param {game.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.isRoomMaster = false;
                object.online = false;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.isRoomMaster != null && message.hasOwnProperty("isRoomMaster"))
                object.isRoomMaster = message.isRoomMaster;
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof game.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerInfo
         * @function getTypeUrl
         * @memberof game.PlayerInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerInfo";
        };

        return PlayerInfo;
    })();

    game.PlayerPermission = (function() {

        /**
         * Properties of a PlayerPermission.
         * @typedef {Object} game.PlayerPermission.$Properties
         * @property {string|null} [playerId] PlayerPermission playerId
         * @property {string|null} [playerName] PlayerPermission playerName
         * @property {boolean|null} [roulette] PlayerPermission roulette
         * @property {boolean|null} [dice] PlayerPermission dice
         * @property {boolean|null} [micAll] PlayerPermission micAll
         * @property {boolean|null} [micProx] PlayerPermission micProx
         * @property {boolean|null} [listenAll] PlayerPermission listenAll
         * @property {boolean|null} [listenProx] PlayerPermission listenProx
         * @property {boolean|null} [followGlobalDarkness] PlayerPermission followGlobalDarkness
         * @property {number|null} [darkness] PlayerPermission darkness
         * @property {boolean|null} [followGlobalSight] PlayerPermission followGlobalSight
         * @property {number|null} [sightRadius] PlayerPermission sightRadius
         * @property {string|null} [sightShape] PlayerPermission sightShape
         * @property {number|null} [sightLength] PlayerPermission sightLength
         * @property {number|null} [sightAngle] PlayerPermission sightAngle
         * @property {boolean|null} [sightShowToAll] PlayerPermission sightShowToAll
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PlayerPermission.
         * @memberof game
         * @interface IPlayerPermission
         * @augments game.PlayerPermission.$Properties
         * @deprecated Use game.PlayerPermission.$Properties instead.
         */

        /**
         * Shape of a PlayerPermission.
         * @typedef {game.PlayerPermission.$Properties} game.PlayerPermission.$Shape
         */

        /**
         * Constructs a new PlayerPermission.
         * @memberof game
         * @classdesc Represents a PlayerPermission.
         * @constructor
         * @param {game.PlayerPermission.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function PlayerPermission(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerPermission playerId.
         * @member {string} playerId
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.playerId = "";

        /**
         * PlayerPermission playerName.
         * @member {string} playerName
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.playerName = "";

        /**
         * PlayerPermission roulette.
         * @member {boolean|null|undefined} roulette
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.roulette = null;

        /**
         * PlayerPermission dice.
         * @member {boolean|null|undefined} dice
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.dice = null;

        /**
         * PlayerPermission micAll.
         * @member {boolean|null|undefined} micAll
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.micAll = null;

        /**
         * PlayerPermission micProx.
         * @member {boolean|null|undefined} micProx
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.micProx = null;

        /**
         * PlayerPermission listenAll.
         * @member {boolean|null|undefined} listenAll
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.listenAll = null;

        /**
         * PlayerPermission listenProx.
         * @member {boolean|null|undefined} listenProx
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.listenProx = null;

        /**
         * PlayerPermission followGlobalDarkness.
         * @member {boolean|null|undefined} followGlobalDarkness
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.followGlobalDarkness = null;

        /**
         * PlayerPermission darkness.
         * @member {number|null|undefined} darkness
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.darkness = null;

        /**
         * PlayerPermission followGlobalSight.
         * @member {boolean|null|undefined} followGlobalSight
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.followGlobalSight = null;

        /**
         * PlayerPermission sightRadius.
         * @member {number|null|undefined} sightRadius
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.sightRadius = null;

        /**
         * PlayerPermission sightShape.
         * @member {string|null|undefined} sightShape
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.sightShape = null;

        /**
         * PlayerPermission sightLength.
         * @member {number|null|undefined} sightLength
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.sightLength = null;

        /**
         * PlayerPermission sightAngle.
         * @member {number|null|undefined} sightAngle
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.sightAngle = null;

        /**
         * PlayerPermission sightShowToAll.
         * @member {boolean|null|undefined} sightShowToAll
         * @memberof game.PlayerPermission
         * @instance
         */
        PlayerPermission.prototype.sightShowToAll = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_roulette", {
            get: $util.oneOfGetter($oneOfFields = ["roulette"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_dice", {
            get: $util.oneOfGetter($oneOfFields = ["dice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_micAll", {
            get: $util.oneOfGetter($oneOfFields = ["micAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_micProx", {
            get: $util.oneOfGetter($oneOfFields = ["micProx"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_listenAll", {
            get: $util.oneOfGetter($oneOfFields = ["listenAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_listenProx", {
            get: $util.oneOfGetter($oneOfFields = ["listenProx"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_followGlobalDarkness", {
            get: $util.oneOfGetter($oneOfFields = ["followGlobalDarkness"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_darkness", {
            get: $util.oneOfGetter($oneOfFields = ["darkness"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_followGlobalSight", {
            get: $util.oneOfGetter($oneOfFields = ["followGlobalSight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_sightRadius", {
            get: $util.oneOfGetter($oneOfFields = ["sightRadius"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_sightShape", {
            get: $util.oneOfGetter($oneOfFields = ["sightShape"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_sightLength", {
            get: $util.oneOfGetter($oneOfFields = ["sightLength"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_sightAngle", {
            get: $util.oneOfGetter($oneOfFields = ["sightAngle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlayerPermission.prototype, "_sightShowToAll", {
            get: $util.oneOfGetter($oneOfFields = ["sightShowToAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PlayerPermission instance using the specified properties.
         * @function create
         * @memberof game.PlayerPermission
         * @static
         * @param {game.PlayerPermission.$Properties=} [properties] Properties to set
         * @returns {game.PlayerPermission} PlayerPermission instance
         * @type {{
         *   (properties: game.PlayerPermission.$Shape): game.PlayerPermission & game.PlayerPermission.$Shape;
         *   (properties?: game.PlayerPermission.$Properties): game.PlayerPermission;
         * }}
         */
        PlayerPermission.create = function create(properties) {
            return new PlayerPermission(properties);
        };

        /**
         * Encodes the specified PlayerPermission message. Does not implicitly {@link game.PlayerPermission.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerPermission
         * @static
         * @param {game.PlayerPermission.$Properties} message PlayerPermission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPermission.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.roulette != null && Object.hasOwnProperty.call(message, "roulette"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.roulette);
            if (message.dice != null && Object.hasOwnProperty.call(message, "dice"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.dice);
            if (message.micAll != null && Object.hasOwnProperty.call(message, "micAll"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.micAll);
            if (message.micProx != null && Object.hasOwnProperty.call(message, "micProx"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.micProx);
            if (message.listenAll != null && Object.hasOwnProperty.call(message, "listenAll"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.listenAll);
            if (message.listenProx != null && Object.hasOwnProperty.call(message, "listenProx"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.listenProx);
            if (message.followGlobalDarkness != null && Object.hasOwnProperty.call(message, "followGlobalDarkness"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.followGlobalDarkness);
            if (message.darkness != null && Object.hasOwnProperty.call(message, "darkness"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.darkness);
            if (message.followGlobalSight != null && Object.hasOwnProperty.call(message, "followGlobalSight"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.followGlobalSight);
            if (message.sightRadius != null && Object.hasOwnProperty.call(message, "sightRadius"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.sightRadius);
            if (message.sightShape != null && Object.hasOwnProperty.call(message, "sightShape"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.sightShape);
            if (message.sightLength != null && Object.hasOwnProperty.call(message, "sightLength"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.sightLength);
            if (message.sightAngle != null && Object.hasOwnProperty.call(message, "sightAngle"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.sightAngle);
            if (message.sightShowToAll != null && Object.hasOwnProperty.call(message, "sightShowToAll"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.sightShowToAll);
            return writer;
        };

        /**
         * Encodes the specified PlayerPermission message, length delimited. Does not implicitly {@link game.PlayerPermission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerPermission
         * @static
         * @param {game.PlayerPermission.$Properties} message PlayerPermission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerPermission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PlayerPermission message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerPermission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerPermission & game.PlayerPermission.$Shape} PlayerPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPermission.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.roulette = reader.bool();
                        break;
                    }
                case 4: {
                        message.dice = reader.bool();
                        break;
                    }
                case 5: {
                        message.micAll = reader.bool();
                        break;
                    }
                case 6: {
                        message.micProx = reader.bool();
                        break;
                    }
                case 7: {
                        message.listenAll = reader.bool();
                        break;
                    }
                case 8: {
                        message.listenProx = reader.bool();
                        break;
                    }
                case 9: {
                        message.followGlobalDarkness = reader.bool();
                        break;
                    }
                case 10: {
                        message.darkness = reader.float();
                        break;
                    }
                case 11: {
                        message.followGlobalSight = reader.bool();
                        break;
                    }
                case 12: {
                        message.sightRadius = reader.float();
                        break;
                    }
                case 13: {
                        message.sightShape = reader.string();
                        break;
                    }
                case 14: {
                        message.sightLength = reader.float();
                        break;
                    }
                case 15: {
                        message.sightAngle = reader.float();
                        break;
                    }
                case 16: {
                        message.sightShowToAll = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerPermission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerPermission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerPermission & game.PlayerPermission.$Shape} PlayerPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerPermission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerPermission message.
         * @function verify
         * @memberof game.PlayerPermission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerPermission.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.roulette != null && message.hasOwnProperty("roulette")) {
                properties._roulette = 1;
                if (typeof message.roulette !== "boolean")
                    return "roulette: boolean expected";
            }
            if (message.dice != null && message.hasOwnProperty("dice")) {
                properties._dice = 1;
                if (typeof message.dice !== "boolean")
                    return "dice: boolean expected";
            }
            if (message.micAll != null && message.hasOwnProperty("micAll")) {
                properties._micAll = 1;
                if (typeof message.micAll !== "boolean")
                    return "micAll: boolean expected";
            }
            if (message.micProx != null && message.hasOwnProperty("micProx")) {
                properties._micProx = 1;
                if (typeof message.micProx !== "boolean")
                    return "micProx: boolean expected";
            }
            if (message.listenAll != null && message.hasOwnProperty("listenAll")) {
                properties._listenAll = 1;
                if (typeof message.listenAll !== "boolean")
                    return "listenAll: boolean expected";
            }
            if (message.listenProx != null && message.hasOwnProperty("listenProx")) {
                properties._listenProx = 1;
                if (typeof message.listenProx !== "boolean")
                    return "listenProx: boolean expected";
            }
            if (message.followGlobalDarkness != null && message.hasOwnProperty("followGlobalDarkness")) {
                properties._followGlobalDarkness = 1;
                if (typeof message.followGlobalDarkness !== "boolean")
                    return "followGlobalDarkness: boolean expected";
            }
            if (message.darkness != null && message.hasOwnProperty("darkness")) {
                properties._darkness = 1;
                if (typeof message.darkness !== "number")
                    return "darkness: number expected";
            }
            if (message.followGlobalSight != null && message.hasOwnProperty("followGlobalSight")) {
                properties._followGlobalSight = 1;
                if (typeof message.followGlobalSight !== "boolean")
                    return "followGlobalSight: boolean expected";
            }
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius")) {
                properties._sightRadius = 1;
                if (typeof message.sightRadius !== "number")
                    return "sightRadius: number expected";
            }
            if (message.sightShape != null && message.hasOwnProperty("sightShape")) {
                properties._sightShape = 1;
                if (!$util.isString(message.sightShape))
                    return "sightShape: string expected";
            }
            if (message.sightLength != null && message.hasOwnProperty("sightLength")) {
                properties._sightLength = 1;
                if (typeof message.sightLength !== "number")
                    return "sightLength: number expected";
            }
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle")) {
                properties._sightAngle = 1;
                if (typeof message.sightAngle !== "number")
                    return "sightAngle: number expected";
            }
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll")) {
                properties._sightShowToAll = 1;
                if (typeof message.sightShowToAll !== "boolean")
                    return "sightShowToAll: boolean expected";
            }
            return null;
        };

        /**
         * Creates a PlayerPermission message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayerPermission
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayerPermission} PlayerPermission
         */
        PlayerPermission.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.roulette != null)
                message.roulette = Boolean(object.roulette);
            if (object.dice != null)
                message.dice = Boolean(object.dice);
            if (object.micAll != null)
                message.micAll = Boolean(object.micAll);
            if (object.micProx != null)
                message.micProx = Boolean(object.micProx);
            if (object.listenAll != null)
                message.listenAll = Boolean(object.listenAll);
            if (object.listenProx != null)
                message.listenProx = Boolean(object.listenProx);
            if (object.followGlobalDarkness != null)
                message.followGlobalDarkness = Boolean(object.followGlobalDarkness);
            if (object.darkness != null)
                message.darkness = Number(object.darkness);
            if (object.followGlobalSight != null)
                message.followGlobalSight = Boolean(object.followGlobalSight);
            if (object.sightRadius != null)
                message.sightRadius = Number(object.sightRadius);
            if (object.sightShape != null)
                message.sightShape = String(object.sightShape);
            if (object.sightLength != null)
                message.sightLength = Number(object.sightLength);
            if (object.sightAngle != null)
                message.sightAngle = Number(object.sightAngle);
            if (object.sightShowToAll != null)
                message.sightShowToAll = Boolean(object.sightShowToAll);
            return message;
        };

        /**
         * Creates a plain object from a PlayerPermission message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayerPermission
         * @static
         * @param {game.PlayerPermission} message PlayerPermission
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerPermission.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.roulette != null && message.hasOwnProperty("roulette")) {
                object.roulette = message.roulette;
                if (options.oneofs)
                    object._roulette = "roulette";
            }
            if (message.dice != null && message.hasOwnProperty("dice")) {
                object.dice = message.dice;
                if (options.oneofs)
                    object._dice = "dice";
            }
            if (message.micAll != null && message.hasOwnProperty("micAll")) {
                object.micAll = message.micAll;
                if (options.oneofs)
                    object._micAll = "micAll";
            }
            if (message.micProx != null && message.hasOwnProperty("micProx")) {
                object.micProx = message.micProx;
                if (options.oneofs)
                    object._micProx = "micProx";
            }
            if (message.listenAll != null && message.hasOwnProperty("listenAll")) {
                object.listenAll = message.listenAll;
                if (options.oneofs)
                    object._listenAll = "listenAll";
            }
            if (message.listenProx != null && message.hasOwnProperty("listenProx")) {
                object.listenProx = message.listenProx;
                if (options.oneofs)
                    object._listenProx = "listenProx";
            }
            if (message.followGlobalDarkness != null && message.hasOwnProperty("followGlobalDarkness")) {
                object.followGlobalDarkness = message.followGlobalDarkness;
                if (options.oneofs)
                    object._followGlobalDarkness = "followGlobalDarkness";
            }
            if (message.darkness != null && message.hasOwnProperty("darkness")) {
                object.darkness = options.json && !isFinite(message.darkness) ? String(message.darkness) : message.darkness;
                if (options.oneofs)
                    object._darkness = "darkness";
            }
            if (message.followGlobalSight != null && message.hasOwnProperty("followGlobalSight")) {
                object.followGlobalSight = message.followGlobalSight;
                if (options.oneofs)
                    object._followGlobalSight = "followGlobalSight";
            }
            if (message.sightRadius != null && message.hasOwnProperty("sightRadius")) {
                object.sightRadius = options.json && !isFinite(message.sightRadius) ? String(message.sightRadius) : message.sightRadius;
                if (options.oneofs)
                    object._sightRadius = "sightRadius";
            }
            if (message.sightShape != null && message.hasOwnProperty("sightShape")) {
                object.sightShape = message.sightShape;
                if (options.oneofs)
                    object._sightShape = "sightShape";
            }
            if (message.sightLength != null && message.hasOwnProperty("sightLength")) {
                object.sightLength = options.json && !isFinite(message.sightLength) ? String(message.sightLength) : message.sightLength;
                if (options.oneofs)
                    object._sightLength = "sightLength";
            }
            if (message.sightAngle != null && message.hasOwnProperty("sightAngle")) {
                object.sightAngle = options.json && !isFinite(message.sightAngle) ? String(message.sightAngle) : message.sightAngle;
                if (options.oneofs)
                    object._sightAngle = "sightAngle";
            }
            if (message.sightShowToAll != null && message.hasOwnProperty("sightShowToAll")) {
                object.sightShowToAll = message.sightShowToAll;
                if (options.oneofs)
                    object._sightShowToAll = "sightShowToAll";
            }
            return object;
        };

        /**
         * Converts this PlayerPermission to JSON.
         * @function toJSON
         * @memberof game.PlayerPermission
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerPermission.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerPermission
         * @function getTypeUrl
         * @memberof game.PlayerPermission
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerPermission.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.PlayerPermission";
        };

        return PlayerPermission;
    })();

    game.RouletteOption = (function() {

        /**
         * Properties of a RouletteOption.
         * @typedef {Object} game.RouletteOption.$Properties
         * @property {string|null} [name] RouletteOption name
         * @property {boolean|null} [enabled] RouletteOption enabled
         * @property {string|null} [desc] RouletteOption desc
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RouletteOption.
         * @memberof game
         * @interface IRouletteOption
         * @augments game.RouletteOption.$Properties
         * @deprecated Use game.RouletteOption.$Properties instead.
         */

        /**
         * Shape of a RouletteOption.
         * @typedef {game.RouletteOption.$Properties} game.RouletteOption.$Shape
         */

        /**
         * Constructs a new RouletteOption.
         * @memberof game
         * @classdesc Represents a RouletteOption.
         * @constructor
         * @param {game.RouletteOption.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RouletteOption(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouletteOption name.
         * @member {string} name
         * @memberof game.RouletteOption
         * @instance
         */
        RouletteOption.prototype.name = "";

        /**
         * RouletteOption enabled.
         * @member {boolean} enabled
         * @memberof game.RouletteOption
         * @instance
         */
        RouletteOption.prototype.enabled = false;

        /**
         * RouletteOption desc.
         * @member {string} desc
         * @memberof game.RouletteOption
         * @instance
         */
        RouletteOption.prototype.desc = "";

        /**
         * Creates a new RouletteOption instance using the specified properties.
         * @function create
         * @memberof game.RouletteOption
         * @static
         * @param {game.RouletteOption.$Properties=} [properties] Properties to set
         * @returns {game.RouletteOption} RouletteOption instance
         * @type {{
         *   (properties: game.RouletteOption.$Shape): game.RouletteOption & game.RouletteOption.$Shape;
         *   (properties?: game.RouletteOption.$Properties): game.RouletteOption;
         * }}
         */
        RouletteOption.create = function create(properties) {
            return new RouletteOption(properties);
        };

        /**
         * Encodes the specified RouletteOption message. Does not implicitly {@link game.RouletteOption.verify|verify} messages.
         * @function encode
         * @memberof game.RouletteOption
         * @static
         * @param {game.RouletteOption.$Properties} message RouletteOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteOption.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
            return writer;
        };

        /**
         * Encodes the specified RouletteOption message, length delimited. Does not implicitly {@link game.RouletteOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RouletteOption
         * @static
         * @param {game.RouletteOption.$Properties} message RouletteOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RouletteOption message from the specified reader or buffer.
         * @function decode
         * @memberof game.RouletteOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RouletteOption & game.RouletteOption.$Shape} RouletteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteOption.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 3: {
                        message.desc = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouletteOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RouletteOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RouletteOption & game.RouletteOption.$Shape} RouletteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouletteOption message.
         * @function verify
         * @memberof game.RouletteOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouletteOption.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            return null;
        };

        /**
         * Creates a RouletteOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RouletteOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RouletteOption} RouletteOption
         */
        RouletteOption.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.name != null)
                message.name = String(object.name);
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        /**
         * Creates a plain object from a RouletteOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RouletteOption
         * @static
         * @param {game.RouletteOption} message RouletteOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouletteOption.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.enabled = false;
                object.desc = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            return object;
        };

        /**
         * Converts this RouletteOption to JSON.
         * @function toJSON
         * @memberof game.RouletteOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouletteOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RouletteOption
         * @function getTypeUrl
         * @memberof game.RouletteOption
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RouletteOption.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RouletteOption";
        };

        return RouletteOption;
    })();

    game.RouletteConfig = (function() {

        /**
         * Properties of a RouletteConfig.
         * @typedef {Object} game.RouletteConfig.$Properties
         * @property {string|null} [configId] RouletteConfig configId
         * @property {string|null} [name] RouletteConfig name
         * @property {string|null} [rouletteType] RouletteConfig rouletteType
         * @property {string|null} [visibility] RouletteConfig visibility
         * @property {Array.<game.RouletteOption.$Properties>|null} [options] RouletteConfig options
         * @property {boolean|null} [isActive] RouletteConfig isActive
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RouletteConfig.
         * @memberof game
         * @interface IRouletteConfig
         * @augments game.RouletteConfig.$Properties
         * @deprecated Use game.RouletteConfig.$Properties instead.
         */

        /**
         * Shape of a RouletteConfig.
         * @typedef {game.RouletteConfig.$Properties} game.RouletteConfig.$Shape
         */

        /**
         * Constructs a new RouletteConfig.
         * @memberof game
         * @classdesc Represents a RouletteConfig.
         * @constructor
         * @param {game.RouletteConfig.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RouletteConfig(properties) {
            this.options = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouletteConfig configId.
         * @member {string} configId
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.configId = "";

        /**
         * RouletteConfig name.
         * @member {string} name
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.name = "";

        /**
         * RouletteConfig rouletteType.
         * @member {string} rouletteType
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.rouletteType = "";

        /**
         * RouletteConfig visibility.
         * @member {string} visibility
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.visibility = "";

        /**
         * RouletteConfig options.
         * @member {Array.<game.RouletteOption.$Properties>} options
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.options = $util.emptyArray;

        /**
         * RouletteConfig isActive.
         * @member {boolean} isActive
         * @memberof game.RouletteConfig
         * @instance
         */
        RouletteConfig.prototype.isActive = false;

        /**
         * Creates a new RouletteConfig instance using the specified properties.
         * @function create
         * @memberof game.RouletteConfig
         * @static
         * @param {game.RouletteConfig.$Properties=} [properties] Properties to set
         * @returns {game.RouletteConfig} RouletteConfig instance
         * @type {{
         *   (properties: game.RouletteConfig.$Shape): game.RouletteConfig & game.RouletteConfig.$Shape;
         *   (properties?: game.RouletteConfig.$Properties): game.RouletteConfig;
         * }}
         */
        RouletteConfig.create = function create(properties) {
            return new RouletteConfig(properties);
        };

        /**
         * Encodes the specified RouletteConfig message. Does not implicitly {@link game.RouletteConfig.verify|verify} messages.
         * @function encode
         * @memberof game.RouletteConfig
         * @static
         * @param {game.RouletteConfig.$Properties} message RouletteConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteConfig.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.configId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.rouletteType != null && Object.hasOwnProperty.call(message, "rouletteType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rouletteType);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.visibility);
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.game.RouletteOption.encode(message.options[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isActive);
            return writer;
        };

        /**
         * Encodes the specified RouletteConfig message, length delimited. Does not implicitly {@link game.RouletteConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RouletteConfig
         * @static
         * @param {game.RouletteConfig.$Properties} message RouletteConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RouletteConfig message from the specified reader or buffer.
         * @function decode
         * @memberof game.RouletteConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RouletteConfig & game.RouletteConfig.$Shape} RouletteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteConfig.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.configId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.rouletteType = reader.string();
                        break;
                    }
                case 4: {
                        message.visibility = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.game.RouletteOption.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 6: {
                        message.isActive = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouletteConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RouletteConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RouletteConfig & game.RouletteConfig.$Shape} RouletteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouletteConfig message.
         * @function verify
         * @memberof game.RouletteConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouletteConfig.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.rouletteType != null && message.hasOwnProperty("rouletteType"))
                if (!$util.isString(message.rouletteType))
                    return "rouletteType: string expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isString(message.visibility))
                    return "visibility: string expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.game.RouletteOption.verify(message.options[i], long + 1);
                    if (error)
                        return "options." + error;
                }
            }
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            return null;
        };

        /**
         * Creates a RouletteConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RouletteConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RouletteConfig} RouletteConfig
         */
        RouletteConfig.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.rouletteType != null)
                message.rouletteType = String(object.rouletteType);
            if (object.visibility != null)
                message.visibility = String(object.visibility);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".game.RouletteConfig.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".game.RouletteConfig.options: object expected");
                    message.options[i] = $root.game.RouletteOption.fromObject(object.options[i], long + 1);
                }
            }
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            return message;
        };

        /**
         * Creates a plain object from a RouletteConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RouletteConfig
         * @static
         * @param {game.RouletteConfig} message RouletteConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouletteConfig.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (options.defaults) {
                object.configId = "";
                object.name = "";
                object.rouletteType = "";
                object.visibility = "";
                object.isActive = false;
            }
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.rouletteType != null && message.hasOwnProperty("rouletteType"))
                object.rouletteType = message.rouletteType;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.game.RouletteOption.toObject(message.options[j], options, _depth + 1);
            }
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            return object;
        };

        /**
         * Converts this RouletteConfig to JSON.
         * @function toJSON
         * @memberof game.RouletteConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouletteConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RouletteConfig
         * @function getTypeUrl
         * @memberof game.RouletteConfig
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RouletteConfig.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RouletteConfig";
        };

        return RouletteConfig;
    })();

    game.RouletteResult = (function() {

        /**
         * Properties of a RouletteResult.
         * @typedef {Object} game.RouletteResult.$Properties
         * @property {string|null} [playerId] RouletteResult playerId
         * @property {string|null} [playerName] RouletteResult playerName
         * @property {string|null} [optionLabel] RouletteResult optionLabel
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RouletteResult.
         * @memberof game
         * @interface IRouletteResult
         * @augments game.RouletteResult.$Properties
         * @deprecated Use game.RouletteResult.$Properties instead.
         */

        /**
         * Shape of a RouletteResult.
         * @typedef {game.RouletteResult.$Properties} game.RouletteResult.$Shape
         */

        /**
         * Constructs a new RouletteResult.
         * @memberof game
         * @classdesc Represents a RouletteResult.
         * @constructor
         * @param {game.RouletteResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RouletteResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouletteResult playerId.
         * @member {string} playerId
         * @memberof game.RouletteResult
         * @instance
         */
        RouletteResult.prototype.playerId = "";

        /**
         * RouletteResult playerName.
         * @member {string} playerName
         * @memberof game.RouletteResult
         * @instance
         */
        RouletteResult.prototype.playerName = "";

        /**
         * RouletteResult optionLabel.
         * @member {string} optionLabel
         * @memberof game.RouletteResult
         * @instance
         */
        RouletteResult.prototype.optionLabel = "";

        /**
         * Creates a new RouletteResult instance using the specified properties.
         * @function create
         * @memberof game.RouletteResult
         * @static
         * @param {game.RouletteResult.$Properties=} [properties] Properties to set
         * @returns {game.RouletteResult} RouletteResult instance
         * @type {{
         *   (properties: game.RouletteResult.$Shape): game.RouletteResult & game.RouletteResult.$Shape;
         *   (properties?: game.RouletteResult.$Properties): game.RouletteResult;
         * }}
         */
        RouletteResult.create = function create(properties) {
            return new RouletteResult(properties);
        };

        /**
         * Encodes the specified RouletteResult message. Does not implicitly {@link game.RouletteResult.verify|verify} messages.
         * @function encode
         * @memberof game.RouletteResult
         * @static
         * @param {game.RouletteResult.$Properties} message RouletteResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteResult.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.optionLabel != null && Object.hasOwnProperty.call(message, "optionLabel"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.optionLabel);
            return writer;
        };

        /**
         * Encodes the specified RouletteResult message, length delimited. Does not implicitly {@link game.RouletteResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RouletteResult
         * @static
         * @param {game.RouletteResult.$Properties} message RouletteResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RouletteResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.RouletteResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RouletteResult & game.RouletteResult.$Shape} RouletteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteResult.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.optionLabel = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouletteResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RouletteResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RouletteResult & game.RouletteResult.$Shape} RouletteResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouletteResult message.
         * @function verify
         * @memberof game.RouletteResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouletteResult.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.optionLabel != null && message.hasOwnProperty("optionLabel"))
                if (!$util.isString(message.optionLabel))
                    return "optionLabel: string expected";
            return null;
        };

        /**
         * Creates a RouletteResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RouletteResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RouletteResult} RouletteResult
         */
        RouletteResult.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.optionLabel != null)
                message.optionLabel = String(object.optionLabel);
            return message;
        };

        /**
         * Creates a plain object from a RouletteResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RouletteResult
         * @static
         * @param {game.RouletteResult} message RouletteResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouletteResult.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.optionLabel = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.optionLabel != null && message.hasOwnProperty("optionLabel"))
                object.optionLabel = message.optionLabel;
            return object;
        };

        /**
         * Converts this RouletteResult to JSON.
         * @function toJSON
         * @memberof game.RouletteResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouletteResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RouletteResult
         * @function getTypeUrl
         * @memberof game.RouletteResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RouletteResult.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RouletteResult";
        };

        return RouletteResult;
    })();

    game.RouletteMessage = (function() {

        /**
         * Properties of a RouletteMessage.
         * @typedef {Object} game.RouletteMessage.$Properties
         * @property {string|null} [playerId] RouletteMessage playerId
         * @property {string|null} [playerName] RouletteMessage playerName
         * @property {string|null} [type] RouletteMessage type
         * @property {string|null} [configId] RouletteMessage configId
         * @property {game.RouletteConfig.$Properties|null} [config] RouletteMessage config
         * @property {Array.<game.RouletteConfig.$Properties>|null} [configs] RouletteMessage configs
         * @property {Array.<game.RouletteResult.$Properties>|null} [results] RouletteMessage results
         * @property {Array.<string>|null} [fullResultRecipientIds] RouletteMessage fullResultRecipientIds
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a RouletteMessage.
         * @memberof game
         * @interface IRouletteMessage
         * @augments game.RouletteMessage.$Properties
         * @deprecated Use game.RouletteMessage.$Properties instead.
         */

        /**
         * Shape of a RouletteMessage.
         * @typedef {game.RouletteMessage.$Properties} game.RouletteMessage.$Shape
         */

        /**
         * Constructs a new RouletteMessage.
         * @memberof game
         * @classdesc Represents a RouletteMessage.
         * @constructor
         * @param {game.RouletteMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function RouletteMessage(properties) {
            this.configs = [];
            this.results = [];
            this.fullResultRecipientIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouletteMessage playerId.
         * @member {string} playerId
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.playerId = "";

        /**
         * RouletteMessage playerName.
         * @member {string} playerName
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.playerName = "";

        /**
         * RouletteMessage type.
         * @member {string} type
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.type = "";

        /**
         * RouletteMessage configId.
         * @member {string} configId
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.configId = "";

        /**
         * RouletteMessage config.
         * @member {game.RouletteConfig.$Properties|null|undefined} config
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.config = null;

        /**
         * RouletteMessage configs.
         * @member {Array.<game.RouletteConfig.$Properties>} configs
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.configs = $util.emptyArray;

        /**
         * RouletteMessage results.
         * @member {Array.<game.RouletteResult.$Properties>} results
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.results = $util.emptyArray;

        /**
         * RouletteMessage fullResultRecipientIds.
         * @member {Array.<string>} fullResultRecipientIds
         * @memberof game.RouletteMessage
         * @instance
         */
        RouletteMessage.prototype.fullResultRecipientIds = $util.emptyArray;

        /**
         * Creates a new RouletteMessage instance using the specified properties.
         * @function create
         * @memberof game.RouletteMessage
         * @static
         * @param {game.RouletteMessage.$Properties=} [properties] Properties to set
         * @returns {game.RouletteMessage} RouletteMessage instance
         * @type {{
         *   (properties: game.RouletteMessage.$Shape): game.RouletteMessage & game.RouletteMessage.$Shape;
         *   (properties?: game.RouletteMessage.$Properties): game.RouletteMessage;
         * }}
         */
        RouletteMessage.create = function create(properties) {
            return new RouletteMessage(properties);
        };

        /**
         * Encodes the specified RouletteMessage message. Does not implicitly {@link game.RouletteMessage.verify|verify} messages.
         * @function encode
         * @memberof game.RouletteMessage
         * @static
         * @param {game.RouletteMessage.$Properties} message RouletteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.configId);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.game.RouletteConfig.encode(message.config, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.configs != null && message.configs.length)
                for (let i = 0; i < message.configs.length; ++i)
                    $root.game.RouletteConfig.encode(message.configs[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.game.RouletteResult.encode(message.results[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.fullResultRecipientIds != null && message.fullResultRecipientIds.length)
                for (let i = 0; i < message.fullResultRecipientIds.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.fullResultRecipientIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RouletteMessage message, length delimited. Does not implicitly {@link game.RouletteMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RouletteMessage
         * @static
         * @param {game.RouletteMessage.$Properties} message RouletteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouletteMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a RouletteMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.RouletteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RouletteMessage & game.RouletteMessage.$Shape} RouletteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.configId = reader.string();
                        break;
                    }
                case 5: {
                        message.config = $root.game.RouletteConfig.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        if (!(message.configs && message.configs.length))
                            message.configs = [];
                        message.configs.push($root.game.RouletteConfig.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 7: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.game.RouletteResult.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 8: {
                        if (!(message.fullResultRecipientIds && message.fullResultRecipientIds.length))
                            message.fullResultRecipientIds = [];
                        message.fullResultRecipientIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouletteMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RouletteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RouletteMessage & game.RouletteMessage.$Shape} RouletteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouletteMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouletteMessage message.
         * @function verify
         * @memberof game.RouletteMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouletteMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                let error = $root.game.RouletteConfig.verify(message.config, long + 1);
                if (error)
                    return "config." + error;
            }
            if (message.configs != null && message.hasOwnProperty("configs")) {
                if (!Array.isArray(message.configs))
                    return "configs: array expected";
                for (let i = 0; i < message.configs.length; ++i) {
                    let error = $root.game.RouletteConfig.verify(message.configs[i], long + 1);
                    if (error)
                        return "configs." + error;
                }
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.game.RouletteResult.verify(message.results[i], long + 1);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.fullResultRecipientIds != null && message.hasOwnProperty("fullResultRecipientIds")) {
                if (!Array.isArray(message.fullResultRecipientIds))
                    return "fullResultRecipientIds: array expected";
                for (let i = 0; i < message.fullResultRecipientIds.length; ++i)
                    if (!$util.isString(message.fullResultRecipientIds[i]))
                        return "fullResultRecipientIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RouletteMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RouletteMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RouletteMessage} RouletteMessage
         */
        RouletteMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.type != null)
                message.type = String(object.type);
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".game.RouletteMessage.config: object expected");
                message.config = $root.game.RouletteConfig.fromObject(object.config, long + 1);
            }
            if (object.configs) {
                if (!Array.isArray(object.configs))
                    throw TypeError(".game.RouletteMessage.configs: array expected");
                message.configs = [];
                for (let i = 0; i < object.configs.length; ++i) {
                    if (typeof object.configs[i] !== "object")
                        throw TypeError(".game.RouletteMessage.configs: object expected");
                    message.configs[i] = $root.game.RouletteConfig.fromObject(object.configs[i], long + 1);
                }
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".game.RouletteMessage.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".game.RouletteMessage.results: object expected");
                    message.results[i] = $root.game.RouletteResult.fromObject(object.results[i], long + 1);
                }
            }
            if (object.fullResultRecipientIds) {
                if (!Array.isArray(object.fullResultRecipientIds))
                    throw TypeError(".game.RouletteMessage.fullResultRecipientIds: array expected");
                message.fullResultRecipientIds = [];
                for (let i = 0; i < object.fullResultRecipientIds.length; ++i)
                    message.fullResultRecipientIds[i] = String(object.fullResultRecipientIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouletteMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RouletteMessage
         * @static
         * @param {game.RouletteMessage} message RouletteMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouletteMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.configs = [];
                object.results = [];
                object.fullResultRecipientIds = [];
            }
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.type = "";
                object.configId = "";
                object.config = null;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.game.RouletteConfig.toObject(message.config, options, _depth + 1);
            if (message.configs && message.configs.length) {
                object.configs = [];
                for (let j = 0; j < message.configs.length; ++j)
                    object.configs[j] = $root.game.RouletteConfig.toObject(message.configs[j], options, _depth + 1);
            }
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.game.RouletteResult.toObject(message.results[j], options, _depth + 1);
            }
            if (message.fullResultRecipientIds && message.fullResultRecipientIds.length) {
                object.fullResultRecipientIds = [];
                for (let j = 0; j < message.fullResultRecipientIds.length; ++j)
                    object.fullResultRecipientIds[j] = message.fullResultRecipientIds[j];
            }
            return object;
        };

        /**
         * Converts this RouletteMessage to JSON.
         * @function toJSON
         * @memberof game.RouletteMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouletteMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RouletteMessage
         * @function getTypeUrl
         * @memberof game.RouletteMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RouletteMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.RouletteMessage";
        };

        return RouletteMessage;
    })();

    game.DiceEntry = (function() {

        /**
         * Properties of a DiceEntry.
         * @typedef {Object} game.DiceEntry.$Properties
         * @property {string|null} [diceType] DiceEntry diceType
         * @property {number|null} [diceCount] DiceEntry diceCount
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DiceEntry.
         * @memberof game
         * @interface IDiceEntry
         * @augments game.DiceEntry.$Properties
         * @deprecated Use game.DiceEntry.$Properties instead.
         */

        /**
         * Shape of a DiceEntry.
         * @typedef {game.DiceEntry.$Properties} game.DiceEntry.$Shape
         */

        /**
         * Constructs a new DiceEntry.
         * @memberof game
         * @classdesc Represents a DiceEntry.
         * @constructor
         * @param {game.DiceEntry.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DiceEntry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiceEntry diceType.
         * @member {string} diceType
         * @memberof game.DiceEntry
         * @instance
         */
        DiceEntry.prototype.diceType = "";

        /**
         * DiceEntry diceCount.
         * @member {number} diceCount
         * @memberof game.DiceEntry
         * @instance
         */
        DiceEntry.prototype.diceCount = 0;

        /**
         * Creates a new DiceEntry instance using the specified properties.
         * @function create
         * @memberof game.DiceEntry
         * @static
         * @param {game.DiceEntry.$Properties=} [properties] Properties to set
         * @returns {game.DiceEntry} DiceEntry instance
         * @type {{
         *   (properties: game.DiceEntry.$Shape): game.DiceEntry & game.DiceEntry.$Shape;
         *   (properties?: game.DiceEntry.$Properties): game.DiceEntry;
         * }}
         */
        DiceEntry.create = function create(properties) {
            return new DiceEntry(properties);
        };

        /**
         * Encodes the specified DiceEntry message. Does not implicitly {@link game.DiceEntry.verify|verify} messages.
         * @function encode
         * @memberof game.DiceEntry
         * @static
         * @param {game.DiceEntry.$Properties} message DiceEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceEntry.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.diceType != null && Object.hasOwnProperty.call(message, "diceType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.diceType);
            if (message.diceCount != null && Object.hasOwnProperty.call(message, "diceCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diceCount);
            return writer;
        };

        /**
         * Encodes the specified DiceEntry message, length delimited. Does not implicitly {@link game.DiceEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DiceEntry
         * @static
         * @param {game.DiceEntry.$Properties} message DiceEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DiceEntry message from the specified reader or buffer.
         * @function decode
         * @memberof game.DiceEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DiceEntry & game.DiceEntry.$Shape} DiceEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceEntry.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.diceType = reader.string();
                        break;
                    }
                case 2: {
                        message.diceCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiceEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DiceEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DiceEntry & game.DiceEntry.$Shape} DiceEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiceEntry message.
         * @function verify
         * @memberof game.DiceEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiceEntry.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                if (!$util.isString(message.diceType))
                    return "diceType: string expected";
            if (message.diceCount != null && message.hasOwnProperty("diceCount"))
                if (!$util.isInteger(message.diceCount))
                    return "diceCount: integer expected";
            return null;
        };

        /**
         * Creates a DiceEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DiceEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DiceEntry} DiceEntry
         */
        DiceEntry.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.diceType != null)
                message.diceType = String(object.diceType);
            if (object.diceCount != null)
                message.diceCount = object.diceCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a DiceEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DiceEntry
         * @static
         * @param {game.DiceEntry} message DiceEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiceEntry.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.diceType = "";
                object.diceCount = 0;
            }
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                object.diceType = message.diceType;
            if (message.diceCount != null && message.hasOwnProperty("diceCount"))
                object.diceCount = message.diceCount;
            return object;
        };

        /**
         * Converts this DiceEntry to JSON.
         * @function toJSON
         * @memberof game.DiceEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiceEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DiceEntry
         * @function getTypeUrl
         * @memberof game.DiceEntry
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DiceEntry.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DiceEntry";
        };

        return DiceEntry;
    })();

    game.DiceConfig = (function() {

        /**
         * Properties of a DiceConfig.
         * @typedef {Object} game.DiceConfig.$Properties
         * @property {string|null} [configId] DiceConfig configId
         * @property {string|null} [name] DiceConfig name
         * @property {string|null} [diceType] DiceConfig diceType
         * @property {number|null} [diceCount] DiceConfig diceCount
         * @property {string|null} [visibility] DiceConfig visibility
         * @property {boolean|null} [isActive] DiceConfig isActive
         * @property {Array.<game.DiceEntry.$Properties>|null} [entries] DiceConfig entries
         * @property {string|null} [mode] DiceConfig mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DiceConfig.
         * @memberof game
         * @interface IDiceConfig
         * @augments game.DiceConfig.$Properties
         * @deprecated Use game.DiceConfig.$Properties instead.
         */

        /**
         * Shape of a DiceConfig.
         * @typedef {game.DiceConfig.$Properties} game.DiceConfig.$Shape
         */

        /**
         * Constructs a new DiceConfig.
         * @memberof game
         * @classdesc Represents a DiceConfig.
         * @constructor
         * @param {game.DiceConfig.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DiceConfig(properties) {
            this.entries = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiceConfig configId.
         * @member {string} configId
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.configId = "";

        /**
         * DiceConfig name.
         * @member {string} name
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.name = "";

        /**
         * DiceConfig diceType.
         * @member {string} diceType
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.diceType = "";

        /**
         * DiceConfig diceCount.
         * @member {number} diceCount
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.diceCount = 0;

        /**
         * DiceConfig visibility.
         * @member {string} visibility
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.visibility = "";

        /**
         * DiceConfig isActive.
         * @member {boolean} isActive
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.isActive = false;

        /**
         * DiceConfig entries.
         * @member {Array.<game.DiceEntry.$Properties>} entries
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.entries = $util.emptyArray;

        /**
         * DiceConfig mode.
         * @member {string} mode
         * @memberof game.DiceConfig
         * @instance
         */
        DiceConfig.prototype.mode = "";

        /**
         * Creates a new DiceConfig instance using the specified properties.
         * @function create
         * @memberof game.DiceConfig
         * @static
         * @param {game.DiceConfig.$Properties=} [properties] Properties to set
         * @returns {game.DiceConfig} DiceConfig instance
         * @type {{
         *   (properties: game.DiceConfig.$Shape): game.DiceConfig & game.DiceConfig.$Shape;
         *   (properties?: game.DiceConfig.$Properties): game.DiceConfig;
         * }}
         */
        DiceConfig.create = function create(properties) {
            return new DiceConfig(properties);
        };

        /**
         * Encodes the specified DiceConfig message. Does not implicitly {@link game.DiceConfig.verify|verify} messages.
         * @function encode
         * @memberof game.DiceConfig
         * @static
         * @param {game.DiceConfig.$Properties} message DiceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceConfig.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.configId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.diceType != null && Object.hasOwnProperty.call(message, "diceType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.diceType);
            if (message.diceCount != null && Object.hasOwnProperty.call(message, "diceCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.diceCount);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.visibility);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isActive);
            if (message.entries != null && message.entries.length)
                for (let i = 0; i < message.entries.length; ++i)
                    $root.game.DiceEntry.encode(message.entries[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.mode);
            return writer;
        };

        /**
         * Encodes the specified DiceConfig message, length delimited. Does not implicitly {@link game.DiceConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DiceConfig
         * @static
         * @param {game.DiceConfig.$Properties} message DiceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DiceConfig message from the specified reader or buffer.
         * @function decode
         * @memberof game.DiceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DiceConfig & game.DiceConfig.$Shape} DiceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceConfig.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.configId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.diceType = reader.string();
                        break;
                    }
                case 4: {
                        message.diceCount = reader.int32();
                        break;
                    }
                case 5: {
                        message.visibility = reader.string();
                        break;
                    }
                case 6: {
                        message.isActive = reader.bool();
                        break;
                    }
                case 7: {
                        if (!(message.entries && message.entries.length))
                            message.entries = [];
                        message.entries.push($root.game.DiceEntry.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 8: {
                        message.mode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiceConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DiceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DiceConfig & game.DiceConfig.$Shape} DiceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiceConfig message.
         * @function verify
         * @memberof game.DiceConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiceConfig.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                if (!$util.isString(message.diceType))
                    return "diceType: string expected";
            if (message.diceCount != null && message.hasOwnProperty("diceCount"))
                if (!$util.isInteger(message.diceCount))
                    return "diceCount: integer expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isString(message.visibility))
                    return "visibility: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (let i = 0; i < message.entries.length; ++i) {
                    let error = $root.game.DiceEntry.verify(message.entries[i], long + 1);
                    if (error)
                        return "entries." + error;
                }
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isString(message.mode))
                    return "mode: string expected";
            return null;
        };

        /**
         * Creates a DiceConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DiceConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DiceConfig} DiceConfig
         */
        DiceConfig.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.diceType != null)
                message.diceType = String(object.diceType);
            if (object.diceCount != null)
                message.diceCount = object.diceCount | 0;
            if (object.visibility != null)
                message.visibility = String(object.visibility);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".game.DiceConfig.entries: array expected");
                message.entries = [];
                for (let i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".game.DiceConfig.entries: object expected");
                    message.entries[i] = $root.game.DiceEntry.fromObject(object.entries[i], long + 1);
                }
            }
            if (object.mode != null)
                message.mode = String(object.mode);
            return message;
        };

        /**
         * Creates a plain object from a DiceConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DiceConfig
         * @static
         * @param {game.DiceConfig} message DiceConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiceConfig.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (options.defaults) {
                object.configId = "";
                object.name = "";
                object.diceType = "";
                object.diceCount = 0;
                object.visibility = "";
                object.isActive = false;
                object.mode = "";
            }
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                object.diceType = message.diceType;
            if (message.diceCount != null && message.hasOwnProperty("diceCount"))
                object.diceCount = message.diceCount;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (let j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.game.DiceEntry.toObject(message.entries[j], options, _depth + 1);
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            return object;
        };

        /**
         * Converts this DiceConfig to JSON.
         * @function toJSON
         * @memberof game.DiceConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiceConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DiceConfig
         * @function getTypeUrl
         * @memberof game.DiceConfig
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DiceConfig.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DiceConfig";
        };

        return DiceConfig;
    })();

    game.DiceEntryResult = (function() {

        /**
         * Properties of a DiceEntryResult.
         * @typedef {Object} game.DiceEntryResult.$Properties
         * @property {string|null} [diceType] DiceEntryResult diceType
         * @property {Array.<number>|null} [values] DiceEntryResult values
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DiceEntryResult.
         * @memberof game
         * @interface IDiceEntryResult
         * @augments game.DiceEntryResult.$Properties
         * @deprecated Use game.DiceEntryResult.$Properties instead.
         */

        /**
         * Shape of a DiceEntryResult.
         * @typedef {game.DiceEntryResult.$Properties} game.DiceEntryResult.$Shape
         */

        /**
         * Constructs a new DiceEntryResult.
         * @memberof game
         * @classdesc Represents a DiceEntryResult.
         * @constructor
         * @param {game.DiceEntryResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DiceEntryResult(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiceEntryResult diceType.
         * @member {string} diceType
         * @memberof game.DiceEntryResult
         * @instance
         */
        DiceEntryResult.prototype.diceType = "";

        /**
         * DiceEntryResult values.
         * @member {Array.<number>} values
         * @memberof game.DiceEntryResult
         * @instance
         */
        DiceEntryResult.prototype.values = $util.emptyArray;

        /**
         * Creates a new DiceEntryResult instance using the specified properties.
         * @function create
         * @memberof game.DiceEntryResult
         * @static
         * @param {game.DiceEntryResult.$Properties=} [properties] Properties to set
         * @returns {game.DiceEntryResult} DiceEntryResult instance
         * @type {{
         *   (properties: game.DiceEntryResult.$Shape): game.DiceEntryResult & game.DiceEntryResult.$Shape;
         *   (properties?: game.DiceEntryResult.$Properties): game.DiceEntryResult;
         * }}
         */
        DiceEntryResult.create = function create(properties) {
            return new DiceEntryResult(properties);
        };

        /**
         * Encodes the specified DiceEntryResult message. Does not implicitly {@link game.DiceEntryResult.verify|verify} messages.
         * @function encode
         * @memberof game.DiceEntryResult
         * @static
         * @param {game.DiceEntryResult.$Properties} message DiceEntryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceEntryResult.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.diceType != null && Object.hasOwnProperty.call(message, "diceType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.diceType);
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.int32(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DiceEntryResult message, length delimited. Does not implicitly {@link game.DiceEntryResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DiceEntryResult
         * @static
         * @param {game.DiceEntryResult.$Properties} message DiceEntryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceEntryResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DiceEntryResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.DiceEntryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DiceEntryResult & game.DiceEntryResult.$Shape} DiceEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceEntryResult.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.diceType = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.values.push(reader.int32());
                        } else
                            message.values.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiceEntryResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DiceEntryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DiceEntryResult & game.DiceEntryResult.$Shape} DiceEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceEntryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiceEntryResult message.
         * @function verify
         * @memberof game.DiceEntryResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiceEntryResult.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                if (!$util.isString(message.diceType))
                    return "diceType: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (let i = 0; i < message.values.length; ++i)
                    if (!$util.isInteger(message.values[i]))
                        return "values: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DiceEntryResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DiceEntryResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DiceEntryResult} DiceEntryResult
         */
        DiceEntryResult.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.diceType != null)
                message.diceType = String(object.diceType);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".game.DiceEntryResult.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = object.values[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DiceEntryResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DiceEntryResult
         * @static
         * @param {game.DiceEntryResult} message DiceEntryResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiceEntryResult.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults)
                object.diceType = "";
            if (message.diceType != null && message.hasOwnProperty("diceType"))
                object.diceType = message.diceType;
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this DiceEntryResult to JSON.
         * @function toJSON
         * @memberof game.DiceEntryResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiceEntryResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DiceEntryResult
         * @function getTypeUrl
         * @memberof game.DiceEntryResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DiceEntryResult.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DiceEntryResult";
        };

        return DiceEntryResult;
    })();

    game.DiceResult = (function() {

        /**
         * Properties of a DiceResult.
         * @typedef {Object} game.DiceResult.$Properties
         * @property {string|null} [playerId] DiceResult playerId
         * @property {string|null} [playerName] DiceResult playerName
         * @property {Array.<number>|null} [values] DiceResult values
         * @property {number|null} [total] DiceResult total
         * @property {Array.<game.DiceEntryResult.$Properties>|null} [entryResults] DiceResult entryResults
         * @property {number|null} [modifier] DiceResult modifier
         * @property {number|null} [baseTotal] DiceResult baseTotal
         * @property {string|null} [rollLabel] DiceResult rollLabel
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DiceResult.
         * @memberof game
         * @interface IDiceResult
         * @augments game.DiceResult.$Properties
         * @deprecated Use game.DiceResult.$Properties instead.
         */

        /**
         * Shape of a DiceResult.
         * @typedef {game.DiceResult.$Properties} game.DiceResult.$Shape
         */

        /**
         * Constructs a new DiceResult.
         * @memberof game
         * @classdesc Represents a DiceResult.
         * @constructor
         * @param {game.DiceResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DiceResult(properties) {
            this.values = [];
            this.entryResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiceResult playerId.
         * @member {string} playerId
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.playerId = "";

        /**
         * DiceResult playerName.
         * @member {string} playerName
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.playerName = "";

        /**
         * DiceResult values.
         * @member {Array.<number>} values
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.values = $util.emptyArray;

        /**
         * DiceResult total.
         * @member {number} total
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.total = 0;

        /**
         * DiceResult entryResults.
         * @member {Array.<game.DiceEntryResult.$Properties>} entryResults
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.entryResults = $util.emptyArray;

        /**
         * DiceResult modifier.
         * @member {number} modifier
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.modifier = 0;

        /**
         * DiceResult baseTotal.
         * @member {number} baseTotal
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.baseTotal = 0;

        /**
         * DiceResult rollLabel.
         * @member {string} rollLabel
         * @memberof game.DiceResult
         * @instance
         */
        DiceResult.prototype.rollLabel = "";

        /**
         * Creates a new DiceResult instance using the specified properties.
         * @function create
         * @memberof game.DiceResult
         * @static
         * @param {game.DiceResult.$Properties=} [properties] Properties to set
         * @returns {game.DiceResult} DiceResult instance
         * @type {{
         *   (properties: game.DiceResult.$Shape): game.DiceResult & game.DiceResult.$Shape;
         *   (properties?: game.DiceResult.$Properties): game.DiceResult;
         * }}
         */
        DiceResult.create = function create(properties) {
            return new DiceResult(properties);
        };

        /**
         * Encodes the specified DiceResult message. Does not implicitly {@link game.DiceResult.verify|verify} messages.
         * @function encode
         * @memberof game.DiceResult
         * @static
         * @param {game.DiceResult.$Properties} message DiceResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceResult.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.int32(message.values[i]);
                writer.ldelim();
            }
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            if (message.entryResults != null && message.entryResults.length)
                for (let i = 0; i < message.entryResults.length; ++i)
                    $root.game.DiceEntryResult.encode(message.entryResults[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.modifier != null && Object.hasOwnProperty.call(message, "modifier"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.modifier);
            if (message.baseTotal != null && Object.hasOwnProperty.call(message, "baseTotal"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.baseTotal);
            if (message.rollLabel != null && Object.hasOwnProperty.call(message, "rollLabel"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rollLabel);
            return writer;
        };

        /**
         * Encodes the specified DiceResult message, length delimited. Does not implicitly {@link game.DiceResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DiceResult
         * @static
         * @param {game.DiceResult.$Properties} message DiceResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DiceResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.DiceResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DiceResult & game.DiceResult.$Shape} DiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceResult.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.values.push(reader.int32());
                        } else
                            message.values.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.total = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.entryResults && message.entryResults.length))
                            message.entryResults = [];
                        message.entryResults.push($root.game.DiceEntryResult.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 6: {
                        message.modifier = reader.int32();
                        break;
                    }
                case 7: {
                        message.baseTotal = reader.int32();
                        break;
                    }
                case 8: {
                        message.rollLabel = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiceResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DiceResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DiceResult & game.DiceResult.$Shape} DiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiceResult message.
         * @function verify
         * @memberof game.DiceResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiceResult.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (let i = 0; i < message.values.length; ++i)
                    if (!$util.isInteger(message.values[i]))
                        return "values: integer[] expected";
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.entryResults != null && message.hasOwnProperty("entryResults")) {
                if (!Array.isArray(message.entryResults))
                    return "entryResults: array expected";
                for (let i = 0; i < message.entryResults.length; ++i) {
                    let error = $root.game.DiceEntryResult.verify(message.entryResults[i], long + 1);
                    if (error)
                        return "entryResults." + error;
                }
            }
            if (message.modifier != null && message.hasOwnProperty("modifier"))
                if (!$util.isInteger(message.modifier))
                    return "modifier: integer expected";
            if (message.baseTotal != null && message.hasOwnProperty("baseTotal"))
                if (!$util.isInteger(message.baseTotal))
                    return "baseTotal: integer expected";
            if (message.rollLabel != null && message.hasOwnProperty("rollLabel"))
                if (!$util.isString(message.rollLabel))
                    return "rollLabel: string expected";
            return null;
        };

        /**
         * Creates a DiceResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DiceResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DiceResult} DiceResult
         */
        DiceResult.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".game.DiceResult.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = object.values[i] | 0;
            }
            if (object.total != null)
                message.total = object.total | 0;
            if (object.entryResults) {
                if (!Array.isArray(object.entryResults))
                    throw TypeError(".game.DiceResult.entryResults: array expected");
                message.entryResults = [];
                for (let i = 0; i < object.entryResults.length; ++i) {
                    if (typeof object.entryResults[i] !== "object")
                        throw TypeError(".game.DiceResult.entryResults: object expected");
                    message.entryResults[i] = $root.game.DiceEntryResult.fromObject(object.entryResults[i], long + 1);
                }
            }
            if (object.modifier != null)
                message.modifier = object.modifier | 0;
            if (object.baseTotal != null)
                message.baseTotal = object.baseTotal | 0;
            if (object.rollLabel != null)
                message.rollLabel = String(object.rollLabel);
            return message;
        };

        /**
         * Creates a plain object from a DiceResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DiceResult
         * @static
         * @param {game.DiceResult} message DiceResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiceResult.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.values = [];
                object.entryResults = [];
            }
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.total = 0;
                object.modifier = 0;
                object.baseTotal = 0;
                object.rollLabel = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.entryResults && message.entryResults.length) {
                object.entryResults = [];
                for (let j = 0; j < message.entryResults.length; ++j)
                    object.entryResults[j] = $root.game.DiceEntryResult.toObject(message.entryResults[j], options, _depth + 1);
            }
            if (message.modifier != null && message.hasOwnProperty("modifier"))
                object.modifier = message.modifier;
            if (message.baseTotal != null && message.hasOwnProperty("baseTotal"))
                object.baseTotal = message.baseTotal;
            if (message.rollLabel != null && message.hasOwnProperty("rollLabel"))
                object.rollLabel = message.rollLabel;
            return object;
        };

        /**
         * Converts this DiceResult to JSON.
         * @function toJSON
         * @memberof game.DiceResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiceResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DiceResult
         * @function getTypeUrl
         * @memberof game.DiceResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DiceResult.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DiceResult";
        };

        return DiceResult;
    })();

    game.DiceMessage = (function() {

        /**
         * Properties of a DiceMessage.
         * @typedef {Object} game.DiceMessage.$Properties
         * @property {string|null} [playerId] DiceMessage playerId
         * @property {string|null} [playerName] DiceMessage playerName
         * @property {string|null} [type] DiceMessage type
         * @property {string|null} [configId] DiceMessage configId
         * @property {game.DiceConfig.$Properties|null} [config] DiceMessage config
         * @property {Array.<game.DiceConfig.$Properties>|null} [configs] DiceMessage configs
         * @property {Array.<game.DiceResult.$Properties>|null} [results] DiceMessage results
         * @property {number|null} [modifier] DiceMessage modifier
         * @property {string|null} [rollLabel] DiceMessage rollLabel
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DiceMessage.
         * @memberof game
         * @interface IDiceMessage
         * @augments game.DiceMessage.$Properties
         * @deprecated Use game.DiceMessage.$Properties instead.
         */

        /**
         * Shape of a DiceMessage.
         * @typedef {game.DiceMessage.$Properties} game.DiceMessage.$Shape
         */

        /**
         * Constructs a new DiceMessage.
         * @memberof game
         * @classdesc Represents a DiceMessage.
         * @constructor
         * @param {game.DiceMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function DiceMessage(properties) {
            this.configs = [];
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiceMessage playerId.
         * @member {string} playerId
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.playerId = "";

        /**
         * DiceMessage playerName.
         * @member {string} playerName
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.playerName = "";

        /**
         * DiceMessage type.
         * @member {string} type
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.type = "";

        /**
         * DiceMessage configId.
         * @member {string} configId
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.configId = "";

        /**
         * DiceMessage config.
         * @member {game.DiceConfig.$Properties|null|undefined} config
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.config = null;

        /**
         * DiceMessage configs.
         * @member {Array.<game.DiceConfig.$Properties>} configs
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.configs = $util.emptyArray;

        /**
         * DiceMessage results.
         * @member {Array.<game.DiceResult.$Properties>} results
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.results = $util.emptyArray;

        /**
         * DiceMessage modifier.
         * @member {number} modifier
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.modifier = 0;

        /**
         * DiceMessage rollLabel.
         * @member {string} rollLabel
         * @memberof game.DiceMessage
         * @instance
         */
        DiceMessage.prototype.rollLabel = "";

        /**
         * Creates a new DiceMessage instance using the specified properties.
         * @function create
         * @memberof game.DiceMessage
         * @static
         * @param {game.DiceMessage.$Properties=} [properties] Properties to set
         * @returns {game.DiceMessage} DiceMessage instance
         * @type {{
         *   (properties: game.DiceMessage.$Shape): game.DiceMessage & game.DiceMessage.$Shape;
         *   (properties?: game.DiceMessage.$Properties): game.DiceMessage;
         * }}
         */
        DiceMessage.create = function create(properties) {
            return new DiceMessage(properties);
        };

        /**
         * Encodes the specified DiceMessage message. Does not implicitly {@link game.DiceMessage.verify|verify} messages.
         * @function encode
         * @memberof game.DiceMessage
         * @static
         * @param {game.DiceMessage.$Properties} message DiceMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.configId);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.game.DiceConfig.encode(message.config, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.configs != null && message.configs.length)
                for (let i = 0; i < message.configs.length; ++i)
                    $root.game.DiceConfig.encode(message.configs[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.game.DiceResult.encode(message.results[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.modifier != null && Object.hasOwnProperty.call(message, "modifier"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.modifier);
            if (message.rollLabel != null && Object.hasOwnProperty.call(message, "rollLabel"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.rollLabel);
            return writer;
        };

        /**
         * Encodes the specified DiceMessage message, length delimited. Does not implicitly {@link game.DiceMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DiceMessage
         * @static
         * @param {game.DiceMessage.$Properties} message DiceMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiceMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DiceMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.DiceMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DiceMessage & game.DiceMessage.$Shape} DiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.configId = reader.string();
                        break;
                    }
                case 5: {
                        message.config = $root.game.DiceConfig.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        if (!(message.configs && message.configs.length))
                            message.configs = [];
                        message.configs.push($root.game.DiceConfig.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 7: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.game.DiceResult.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 8: {
                        message.modifier = reader.int32();
                        break;
                    }
                case 9: {
                        message.rollLabel = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiceMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DiceMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DiceMessage & game.DiceMessage.$Shape} DiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiceMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiceMessage message.
         * @function verify
         * @memberof game.DiceMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiceMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                let error = $root.game.DiceConfig.verify(message.config, long + 1);
                if (error)
                    return "config." + error;
            }
            if (message.configs != null && message.hasOwnProperty("configs")) {
                if (!Array.isArray(message.configs))
                    return "configs: array expected";
                for (let i = 0; i < message.configs.length; ++i) {
                    let error = $root.game.DiceConfig.verify(message.configs[i], long + 1);
                    if (error)
                        return "configs." + error;
                }
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.game.DiceResult.verify(message.results[i], long + 1);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.modifier != null && message.hasOwnProperty("modifier"))
                if (!$util.isInteger(message.modifier))
                    return "modifier: integer expected";
            if (message.rollLabel != null && message.hasOwnProperty("rollLabel"))
                if (!$util.isString(message.rollLabel))
                    return "rollLabel: string expected";
            return null;
        };

        /**
         * Creates a DiceMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DiceMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DiceMessage} DiceMessage
         */
        DiceMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.type != null)
                message.type = String(object.type);
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".game.DiceMessage.config: object expected");
                message.config = $root.game.DiceConfig.fromObject(object.config, long + 1);
            }
            if (object.configs) {
                if (!Array.isArray(object.configs))
                    throw TypeError(".game.DiceMessage.configs: array expected");
                message.configs = [];
                for (let i = 0; i < object.configs.length; ++i) {
                    if (typeof object.configs[i] !== "object")
                        throw TypeError(".game.DiceMessage.configs: object expected");
                    message.configs[i] = $root.game.DiceConfig.fromObject(object.configs[i], long + 1);
                }
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".game.DiceMessage.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".game.DiceMessage.results: object expected");
                    message.results[i] = $root.game.DiceResult.fromObject(object.results[i], long + 1);
                }
            }
            if (object.modifier != null)
                message.modifier = object.modifier | 0;
            if (object.rollLabel != null)
                message.rollLabel = String(object.rollLabel);
            return message;
        };

        /**
         * Creates a plain object from a DiceMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DiceMessage
         * @static
         * @param {game.DiceMessage} message DiceMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiceMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.configs = [];
                object.results = [];
            }
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.type = "";
                object.configId = "";
                object.config = null;
                object.modifier = 0;
                object.rollLabel = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.game.DiceConfig.toObject(message.config, options, _depth + 1);
            if (message.configs && message.configs.length) {
                object.configs = [];
                for (let j = 0; j < message.configs.length; ++j)
                    object.configs[j] = $root.game.DiceConfig.toObject(message.configs[j], options, _depth + 1);
            }
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.game.DiceResult.toObject(message.results[j], options, _depth + 1);
            }
            if (message.modifier != null && message.hasOwnProperty("modifier"))
                object.modifier = message.modifier;
            if (message.rollLabel != null && message.hasOwnProperty("rollLabel"))
                object.rollLabel = message.rollLabel;
            return object;
        };

        /**
         * Converts this DiceMessage to JSON.
         * @function toJSON
         * @memberof game.DiceMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiceMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DiceMessage
         * @function getTypeUrl
         * @memberof game.DiceMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DiceMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.DiceMessage";
        };

        return DiceMessage;
    })();

    game.VoteOption = (function() {

        /**
         * Properties of a VoteOption.
         * @typedef {Object} game.VoteOption.$Properties
         * @property {string|null} [label] VoteOption label
         * @property {boolean|null} [enabled] VoteOption enabled
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteOption.
         * @memberof game
         * @interface IVoteOption
         * @augments game.VoteOption.$Properties
         * @deprecated Use game.VoteOption.$Properties instead.
         */

        /**
         * Shape of a VoteOption.
         * @typedef {game.VoteOption.$Properties} game.VoteOption.$Shape
         */

        /**
         * Constructs a new VoteOption.
         * @memberof game
         * @classdesc Represents a VoteOption.
         * @constructor
         * @param {game.VoteOption.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteOption(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteOption label.
         * @member {string} label
         * @memberof game.VoteOption
         * @instance
         */
        VoteOption.prototype.label = "";

        /**
         * VoteOption enabled.
         * @member {boolean} enabled
         * @memberof game.VoteOption
         * @instance
         */
        VoteOption.prototype.enabled = false;

        /**
         * Creates a new VoteOption instance using the specified properties.
         * @function create
         * @memberof game.VoteOption
         * @static
         * @param {game.VoteOption.$Properties=} [properties] Properties to set
         * @returns {game.VoteOption} VoteOption instance
         * @type {{
         *   (properties: game.VoteOption.$Shape): game.VoteOption & game.VoteOption.$Shape;
         *   (properties?: game.VoteOption.$Properties): game.VoteOption;
         * }}
         */
        VoteOption.create = function create(properties) {
            return new VoteOption(properties);
        };

        /**
         * Encodes the specified VoteOption message. Does not implicitly {@link game.VoteOption.verify|verify} messages.
         * @function encode
         * @memberof game.VoteOption
         * @static
         * @param {game.VoteOption.$Properties} message VoteOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteOption.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
            return writer;
        };

        /**
         * Encodes the specified VoteOption message, length delimited. Does not implicitly {@link game.VoteOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteOption
         * @static
         * @param {game.VoteOption.$Properties} message VoteOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteOption message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteOption & game.VoteOption.$Shape} VoteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteOption.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.string();
                        break;
                    }
                case 2: {
                        message.enabled = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteOption & game.VoteOption.$Shape} VoteOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteOption message.
         * @function verify
         * @memberof game.VoteOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteOption.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            return null;
        };

        /**
         * Creates a VoteOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteOption} VoteOption
         */
        VoteOption.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.label != null)
                message.label = String(object.label);
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            return message;
        };

        /**
         * Creates a plain object from a VoteOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteOption
         * @static
         * @param {game.VoteOption} message VoteOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteOption.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.label = "";
                object.enabled = false;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            return object;
        };

        /**
         * Converts this VoteOption to JSON.
         * @function toJSON
         * @memberof game.VoteOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteOption
         * @function getTypeUrl
         * @memberof game.VoteOption
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteOption.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteOption";
        };

        return VoteOption;
    })();

    game.VoteParticipant = (function() {

        /**
         * Properties of a VoteParticipant.
         * @typedef {Object} game.VoteParticipant.$Properties
         * @property {string|null} [playerId] VoteParticipant playerId
         * @property {string|null} [playerName] VoteParticipant playerName
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteParticipant.
         * @memberof game
         * @interface IVoteParticipant
         * @augments game.VoteParticipant.$Properties
         * @deprecated Use game.VoteParticipant.$Properties instead.
         */

        /**
         * Shape of a VoteParticipant.
         * @typedef {game.VoteParticipant.$Properties} game.VoteParticipant.$Shape
         */

        /**
         * Constructs a new VoteParticipant.
         * @memberof game
         * @classdesc Represents a VoteParticipant.
         * @constructor
         * @param {game.VoteParticipant.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteParticipant(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteParticipant playerId.
         * @member {string} playerId
         * @memberof game.VoteParticipant
         * @instance
         */
        VoteParticipant.prototype.playerId = "";

        /**
         * VoteParticipant playerName.
         * @member {string} playerName
         * @memberof game.VoteParticipant
         * @instance
         */
        VoteParticipant.prototype.playerName = "";

        /**
         * Creates a new VoteParticipant instance using the specified properties.
         * @function create
         * @memberof game.VoteParticipant
         * @static
         * @param {game.VoteParticipant.$Properties=} [properties] Properties to set
         * @returns {game.VoteParticipant} VoteParticipant instance
         * @type {{
         *   (properties: game.VoteParticipant.$Shape): game.VoteParticipant & game.VoteParticipant.$Shape;
         *   (properties?: game.VoteParticipant.$Properties): game.VoteParticipant;
         * }}
         */
        VoteParticipant.create = function create(properties) {
            return new VoteParticipant(properties);
        };

        /**
         * Encodes the specified VoteParticipant message. Does not implicitly {@link game.VoteParticipant.verify|verify} messages.
         * @function encode
         * @memberof game.VoteParticipant
         * @static
         * @param {game.VoteParticipant.$Properties} message VoteParticipant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteParticipant.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            return writer;
        };

        /**
         * Encodes the specified VoteParticipant message, length delimited. Does not implicitly {@link game.VoteParticipant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteParticipant
         * @static
         * @param {game.VoteParticipant.$Properties} message VoteParticipant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteParticipant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteParticipant message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteParticipant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteParticipant & game.VoteParticipant.$Shape} VoteParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteParticipant.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteParticipant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteParticipant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteParticipant & game.VoteParticipant.$Shape} VoteParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteParticipant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteParticipant message.
         * @function verify
         * @memberof game.VoteParticipant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteParticipant.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            return null;
        };

        /**
         * Creates a VoteParticipant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteParticipant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteParticipant} VoteParticipant
         */
        VoteParticipant.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            return message;
        };

        /**
         * Creates a plain object from a VoteParticipant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteParticipant
         * @static
         * @param {game.VoteParticipant} message VoteParticipant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteParticipant.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            return object;
        };

        /**
         * Converts this VoteParticipant to JSON.
         * @function toJSON
         * @memberof game.VoteParticipant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteParticipant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteParticipant
         * @function getTypeUrl
         * @memberof game.VoteParticipant
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteParticipant.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteParticipant";
        };

        return VoteParticipant;
    })();

    game.VoteConfig = (function() {

        /**
         * Properties of a VoteConfig.
         * @typedef {Object} game.VoteConfig.$Properties
         * @property {string|null} [configId] VoteConfig configId
         * @property {string|null} [name] VoteConfig name
         * @property {Array.<game.VoteOption.$Properties>|null} [options] VoteConfig options
         * @property {number|null} [waitTime] VoteConfig waitTime
         * @property {Array.<game.VoteParticipant.$Properties>|null} [participants] VoteConfig participants
         * @property {boolean|null} [isActive] VoteConfig isActive
         * @property {string|null} [flow] VoteConfig flow
         * @property {string|null} [mode] VoteConfig mode
         * @property {string|null} [threshold] VoteConfig threshold
         * @property {number|null} [thresholdValue] VoteConfig thresholdValue
         * @property {string|null} [visibility] VoteConfig visibility
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteConfig.
         * @memberof game
         * @interface IVoteConfig
         * @augments game.VoteConfig.$Properties
         * @deprecated Use game.VoteConfig.$Properties instead.
         */

        /**
         * Shape of a VoteConfig.
         * @typedef {game.VoteConfig.$Properties} game.VoteConfig.$Shape
         */

        /**
         * Constructs a new VoteConfig.
         * @memberof game
         * @classdesc Represents a VoteConfig.
         * @constructor
         * @param {game.VoteConfig.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteConfig(properties) {
            this.options = [];
            this.participants = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteConfig configId.
         * @member {string} configId
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.configId = "";

        /**
         * VoteConfig name.
         * @member {string} name
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.name = "";

        /**
         * VoteConfig options.
         * @member {Array.<game.VoteOption.$Properties>} options
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.options = $util.emptyArray;

        /**
         * VoteConfig waitTime.
         * @member {number} waitTime
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.waitTime = 0;

        /**
         * VoteConfig participants.
         * @member {Array.<game.VoteParticipant.$Properties>} participants
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.participants = $util.emptyArray;

        /**
         * VoteConfig isActive.
         * @member {boolean} isActive
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.isActive = false;

        /**
         * VoteConfig flow.
         * @member {string} flow
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.flow = "";

        /**
         * VoteConfig mode.
         * @member {string} mode
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.mode = "";

        /**
         * VoteConfig threshold.
         * @member {string} threshold
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.threshold = "";

        /**
         * VoteConfig thresholdValue.
         * @member {number} thresholdValue
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.thresholdValue = 0;

        /**
         * VoteConfig visibility.
         * @member {string} visibility
         * @memberof game.VoteConfig
         * @instance
         */
        VoteConfig.prototype.visibility = "";

        /**
         * Creates a new VoteConfig instance using the specified properties.
         * @function create
         * @memberof game.VoteConfig
         * @static
         * @param {game.VoteConfig.$Properties=} [properties] Properties to set
         * @returns {game.VoteConfig} VoteConfig instance
         * @type {{
         *   (properties: game.VoteConfig.$Shape): game.VoteConfig & game.VoteConfig.$Shape;
         *   (properties?: game.VoteConfig.$Properties): game.VoteConfig;
         * }}
         */
        VoteConfig.create = function create(properties) {
            return new VoteConfig(properties);
        };

        /**
         * Encodes the specified VoteConfig message. Does not implicitly {@link game.VoteConfig.verify|verify} messages.
         * @function encode
         * @memberof game.VoteConfig
         * @static
         * @param {game.VoteConfig.$Properties} message VoteConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteConfig.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.configId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.game.VoteOption.encode(message.options[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.waitTime != null && Object.hasOwnProperty.call(message, "waitTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.waitTime);
            if (message.participants != null && message.participants.length)
                for (let i = 0; i < message.participants.length; ++i)
                    $root.game.VoteParticipant.encode(message.participants[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isActive);
            if (message.flow != null && Object.hasOwnProperty.call(message, "flow"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.flow);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.mode);
            if (message.threshold != null && Object.hasOwnProperty.call(message, "threshold"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.threshold);
            if (message.thresholdValue != null && Object.hasOwnProperty.call(message, "thresholdValue"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.thresholdValue);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.visibility);
            return writer;
        };

        /**
         * Encodes the specified VoteConfig message, length delimited. Does not implicitly {@link game.VoteConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteConfig
         * @static
         * @param {game.VoteConfig.$Properties} message VoteConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteConfig message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteConfig & game.VoteConfig.$Shape} VoteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteConfig.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.configId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.game.VoteOption.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 4: {
                        message.waitTime = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.participants && message.participants.length))
                            message.participants = [];
                        message.participants.push($root.game.VoteParticipant.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 6: {
                        message.isActive = reader.bool();
                        break;
                    }
                case 8: {
                        message.flow = reader.string();
                        break;
                    }
                case 9: {
                        message.mode = reader.string();
                        break;
                    }
                case 10: {
                        message.threshold = reader.string();
                        break;
                    }
                case 11: {
                        message.thresholdValue = reader.int32();
                        break;
                    }
                case 12: {
                        message.visibility = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteConfig & game.VoteConfig.$Shape} VoteConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteConfig message.
         * @function verify
         * @memberof game.VoteConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteConfig.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.game.VoteOption.verify(message.options[i], long + 1);
                    if (error)
                        return "options." + error;
                }
            }
            if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                if (!$util.isInteger(message.waitTime))
                    return "waitTime: integer expected";
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (let i = 0; i < message.participants.length; ++i) {
                    let error = $root.game.VoteParticipant.verify(message.participants[i], long + 1);
                    if (error)
                        return "participants." + error;
                }
            }
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.flow != null && message.hasOwnProperty("flow"))
                if (!$util.isString(message.flow))
                    return "flow: string expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isString(message.mode))
                    return "mode: string expected";
            if (message.threshold != null && message.hasOwnProperty("threshold"))
                if (!$util.isString(message.threshold))
                    return "threshold: string expected";
            if (message.thresholdValue != null && message.hasOwnProperty("thresholdValue"))
                if (!$util.isInteger(message.thresholdValue))
                    return "thresholdValue: integer expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isString(message.visibility))
                    return "visibility: string expected";
            return null;
        };

        /**
         * Creates a VoteConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteConfig} VoteConfig
         */
        VoteConfig.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".game.VoteConfig.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".game.VoteConfig.options: object expected");
                    message.options[i] = $root.game.VoteOption.fromObject(object.options[i], long + 1);
                }
            }
            if (object.waitTime != null)
                message.waitTime = object.waitTime | 0;
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".game.VoteConfig.participants: array expected");
                message.participants = [];
                for (let i = 0; i < object.participants.length; ++i) {
                    if (typeof object.participants[i] !== "object")
                        throw TypeError(".game.VoteConfig.participants: object expected");
                    message.participants[i] = $root.game.VoteParticipant.fromObject(object.participants[i], long + 1);
                }
            }
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.flow != null)
                message.flow = String(object.flow);
            if (object.mode != null)
                message.mode = String(object.mode);
            if (object.threshold != null)
                message.threshold = String(object.threshold);
            if (object.thresholdValue != null)
                message.thresholdValue = object.thresholdValue | 0;
            if (object.visibility != null)
                message.visibility = String(object.visibility);
            return message;
        };

        /**
         * Creates a plain object from a VoteConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteConfig
         * @static
         * @param {game.VoteConfig} message VoteConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteConfig.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.options = [];
                object.participants = [];
            }
            if (options.defaults) {
                object.configId = "";
                object.name = "";
                object.waitTime = 0;
                object.isActive = false;
                object.flow = "";
                object.mode = "";
                object.threshold = "";
                object.thresholdValue = 0;
                object.visibility = "";
            }
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.game.VoteOption.toObject(message.options[j], options, _depth + 1);
            }
            if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                object.waitTime = message.waitTime;
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (let j = 0; j < message.participants.length; ++j)
                    object.participants[j] = $root.game.VoteParticipant.toObject(message.participants[j], options, _depth + 1);
            }
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.flow != null && message.hasOwnProperty("flow"))
                object.flow = message.flow;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.threshold != null && message.hasOwnProperty("threshold"))
                object.threshold = message.threshold;
            if (message.thresholdValue != null && message.hasOwnProperty("thresholdValue"))
                object.thresholdValue = message.thresholdValue;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            return object;
        };

        /**
         * Converts this VoteConfig to JSON.
         * @function toJSON
         * @memberof game.VoteConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteConfig
         * @function getTypeUrl
         * @memberof game.VoteConfig
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteConfig.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteConfig";
        };

        return VoteConfig;
    })();

    game.VoteTally = (function() {

        /**
         * Properties of a VoteTally.
         * @typedef {Object} game.VoteTally.$Properties
         * @property {string|null} [label] VoteTally label
         * @property {number|null} [count] VoteTally count
         * @property {boolean|null} [passed] VoteTally passed
         * @property {string|null} [value] VoteTally value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteTally.
         * @memberof game
         * @interface IVoteTally
         * @augments game.VoteTally.$Properties
         * @deprecated Use game.VoteTally.$Properties instead.
         */

        /**
         * Shape of a VoteTally.
         * @typedef {game.VoteTally.$Properties} game.VoteTally.$Shape
         */

        /**
         * Constructs a new VoteTally.
         * @memberof game
         * @classdesc Represents a VoteTally.
         * @constructor
         * @param {game.VoteTally.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteTally(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteTally label.
         * @member {string} label
         * @memberof game.VoteTally
         * @instance
         */
        VoteTally.prototype.label = "";

        /**
         * VoteTally count.
         * @member {number} count
         * @memberof game.VoteTally
         * @instance
         */
        VoteTally.prototype.count = 0;

        /**
         * VoteTally passed.
         * @member {boolean} passed
         * @memberof game.VoteTally
         * @instance
         */
        VoteTally.prototype.passed = false;

        /**
         * VoteTally value.
         * @member {string} value
         * @memberof game.VoteTally
         * @instance
         */
        VoteTally.prototype.value = "";

        /**
         * Creates a new VoteTally instance using the specified properties.
         * @function create
         * @memberof game.VoteTally
         * @static
         * @param {game.VoteTally.$Properties=} [properties] Properties to set
         * @returns {game.VoteTally} VoteTally instance
         * @type {{
         *   (properties: game.VoteTally.$Shape): game.VoteTally & game.VoteTally.$Shape;
         *   (properties?: game.VoteTally.$Properties): game.VoteTally;
         * }}
         */
        VoteTally.create = function create(properties) {
            return new VoteTally(properties);
        };

        /**
         * Encodes the specified VoteTally message. Does not implicitly {@link game.VoteTally.verify|verify} messages.
         * @function encode
         * @memberof game.VoteTally
         * @static
         * @param {game.VoteTally.$Properties} message VoteTally message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteTally.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            if (message.passed != null && Object.hasOwnProperty.call(message, "passed"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.passed);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified VoteTally message, length delimited. Does not implicitly {@link game.VoteTally.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteTally
         * @static
         * @param {game.VoteTally.$Properties} message VoteTally message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteTally.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteTally message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteTally
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteTally & game.VoteTally.$Shape} VoteTally
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteTally.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.string();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                case 3: {
                        message.passed = reader.bool();
                        break;
                    }
                case 4: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteTally message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteTally
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteTally & game.VoteTally.$Shape} VoteTally
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteTally.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteTally message.
         * @function verify
         * @memberof game.VoteTally
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteTally.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.passed != null && message.hasOwnProperty("passed"))
                if (typeof message.passed !== "boolean")
                    return "passed: boolean expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a VoteTally message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteTally
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteTally} VoteTally
         */
        VoteTally.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.label != null)
                message.label = String(object.label);
            if (object.count != null)
                message.count = object.count | 0;
            if (object.passed != null)
                message.passed = Boolean(object.passed);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a VoteTally message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteTally
         * @static
         * @param {game.VoteTally} message VoteTally
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteTally.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.label = "";
                object.count = 0;
                object.passed = false;
                object.value = "";
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.passed != null && message.hasOwnProperty("passed"))
                object.passed = message.passed;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this VoteTally to JSON.
         * @function toJSON
         * @memberof game.VoteTally
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteTally.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteTally
         * @function getTypeUrl
         * @memberof game.VoteTally
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteTally.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteTally";
        };

        return VoteTally;
    })();

    game.VoteSelection = (function() {

        /**
         * Properties of a VoteSelection.
         * @typedef {Object} game.VoteSelection.$Properties
         * @property {string|null} [value] VoteSelection value
         * @property {string|null} [label] VoteSelection label
         * @property {string|null} [playerId] VoteSelection playerId
         * @property {string|null} [playerName] VoteSelection playerName
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteSelection.
         * @memberof game
         * @interface IVoteSelection
         * @augments game.VoteSelection.$Properties
         * @deprecated Use game.VoteSelection.$Properties instead.
         */

        /**
         * Shape of a VoteSelection.
         * @typedef {game.VoteSelection.$Properties} game.VoteSelection.$Shape
         */

        /**
         * Constructs a new VoteSelection.
         * @memberof game
         * @classdesc Represents a VoteSelection.
         * @constructor
         * @param {game.VoteSelection.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteSelection(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteSelection value.
         * @member {string} value
         * @memberof game.VoteSelection
         * @instance
         */
        VoteSelection.prototype.value = "";

        /**
         * VoteSelection label.
         * @member {string} label
         * @memberof game.VoteSelection
         * @instance
         */
        VoteSelection.prototype.label = "";

        /**
         * VoteSelection playerId.
         * @member {string} playerId
         * @memberof game.VoteSelection
         * @instance
         */
        VoteSelection.prototype.playerId = "";

        /**
         * VoteSelection playerName.
         * @member {string} playerName
         * @memberof game.VoteSelection
         * @instance
         */
        VoteSelection.prototype.playerName = "";

        /**
         * Creates a new VoteSelection instance using the specified properties.
         * @function create
         * @memberof game.VoteSelection
         * @static
         * @param {game.VoteSelection.$Properties=} [properties] Properties to set
         * @returns {game.VoteSelection} VoteSelection instance
         * @type {{
         *   (properties: game.VoteSelection.$Shape): game.VoteSelection & game.VoteSelection.$Shape;
         *   (properties?: game.VoteSelection.$Properties): game.VoteSelection;
         * }}
         */
        VoteSelection.create = function create(properties) {
            return new VoteSelection(properties);
        };

        /**
         * Encodes the specified VoteSelection message. Does not implicitly {@link game.VoteSelection.verify|verify} messages.
         * @function encode
         * @memberof game.VoteSelection
         * @static
         * @param {game.VoteSelection.$Properties} message VoteSelection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteSelection.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerName);
            return writer;
        };

        /**
         * Encodes the specified VoteSelection message, length delimited. Does not implicitly {@link game.VoteSelection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteSelection
         * @static
         * @param {game.VoteSelection.$Properties} message VoteSelection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteSelection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteSelection message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteSelection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteSelection & game.VoteSelection.$Shape} VoteSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteSelection.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.playerId = reader.string();
                        break;
                    }
                case 4: {
                        message.playerName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteSelection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteSelection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteSelection & game.VoteSelection.$Shape} VoteSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteSelection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteSelection message.
         * @function verify
         * @memberof game.VoteSelection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteSelection.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            return null;
        };

        /**
         * Creates a VoteSelection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteSelection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteSelection} VoteSelection
         */
        VoteSelection.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.value != null)
                message.value = String(object.value);
            if (object.label != null)
                message.label = String(object.label);
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            return message;
        };

        /**
         * Creates a plain object from a VoteSelection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteSelection
         * @static
         * @param {game.VoteSelection} message VoteSelection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteSelection.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.value = "";
                object.label = "";
                object.playerId = "";
                object.playerName = "";
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            return object;
        };

        /**
         * Converts this VoteSelection to JSON.
         * @function toJSON
         * @memberof game.VoteSelection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteSelection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteSelection
         * @function getTypeUrl
         * @memberof game.VoteSelection
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteSelection.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteSelection";
        };

        return VoteSelection;
    })();

    game.VoteVoterResult = (function() {

        /**
         * Properties of a VoteVoterResult.
         * @typedef {Object} game.VoteVoterResult.$Properties
         * @property {string|null} [playerId] VoteVoterResult playerId
         * @property {string|null} [playerName] VoteVoterResult playerName
         * @property {Array.<game.VoteSelection.$Properties>|null} [selections] VoteVoterResult selections
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteVoterResult.
         * @memberof game
         * @interface IVoteVoterResult
         * @augments game.VoteVoterResult.$Properties
         * @deprecated Use game.VoteVoterResult.$Properties instead.
         */

        /**
         * Shape of a VoteVoterResult.
         * @typedef {game.VoteVoterResult.$Properties} game.VoteVoterResult.$Shape
         */

        /**
         * Constructs a new VoteVoterResult.
         * @memberof game
         * @classdesc Represents a VoteVoterResult.
         * @constructor
         * @param {game.VoteVoterResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteVoterResult(properties) {
            this.selections = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteVoterResult playerId.
         * @member {string} playerId
         * @memberof game.VoteVoterResult
         * @instance
         */
        VoteVoterResult.prototype.playerId = "";

        /**
         * VoteVoterResult playerName.
         * @member {string} playerName
         * @memberof game.VoteVoterResult
         * @instance
         */
        VoteVoterResult.prototype.playerName = "";

        /**
         * VoteVoterResult selections.
         * @member {Array.<game.VoteSelection.$Properties>} selections
         * @memberof game.VoteVoterResult
         * @instance
         */
        VoteVoterResult.prototype.selections = $util.emptyArray;

        /**
         * Creates a new VoteVoterResult instance using the specified properties.
         * @function create
         * @memberof game.VoteVoterResult
         * @static
         * @param {game.VoteVoterResult.$Properties=} [properties] Properties to set
         * @returns {game.VoteVoterResult} VoteVoterResult instance
         * @type {{
         *   (properties: game.VoteVoterResult.$Shape): game.VoteVoterResult & game.VoteVoterResult.$Shape;
         *   (properties?: game.VoteVoterResult.$Properties): game.VoteVoterResult;
         * }}
         */
        VoteVoterResult.create = function create(properties) {
            return new VoteVoterResult(properties);
        };

        /**
         * Encodes the specified VoteVoterResult message. Does not implicitly {@link game.VoteVoterResult.verify|verify} messages.
         * @function encode
         * @memberof game.VoteVoterResult
         * @static
         * @param {game.VoteVoterResult.$Properties} message VoteVoterResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteVoterResult.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.selections != null && message.selections.length)
                for (let i = 0; i < message.selections.length; ++i)
                    $root.game.VoteSelection.encode(message.selections[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VoteVoterResult message, length delimited. Does not implicitly {@link game.VoteVoterResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteVoterResult
         * @static
         * @param {game.VoteVoterResult.$Properties} message VoteVoterResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteVoterResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteVoterResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteVoterResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteVoterResult & game.VoteVoterResult.$Shape} VoteVoterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteVoterResult.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.selections && message.selections.length))
                            message.selections = [];
                        message.selections.push($root.game.VoteSelection.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteVoterResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteVoterResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteVoterResult & game.VoteVoterResult.$Shape} VoteVoterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteVoterResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteVoterResult message.
         * @function verify
         * @memberof game.VoteVoterResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteVoterResult.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.selections != null && message.hasOwnProperty("selections")) {
                if (!Array.isArray(message.selections))
                    return "selections: array expected";
                for (let i = 0; i < message.selections.length; ++i) {
                    let error = $root.game.VoteSelection.verify(message.selections[i], long + 1);
                    if (error)
                        return "selections." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VoteVoterResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteVoterResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteVoterResult} VoteVoterResult
         */
        VoteVoterResult.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.selections) {
                if (!Array.isArray(object.selections))
                    throw TypeError(".game.VoteVoterResult.selections: array expected");
                message.selections = [];
                for (let i = 0; i < object.selections.length; ++i) {
                    if (typeof object.selections[i] !== "object")
                        throw TypeError(".game.VoteVoterResult.selections: object expected");
                    message.selections[i] = $root.game.VoteSelection.fromObject(object.selections[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VoteVoterResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteVoterResult
         * @static
         * @param {game.VoteVoterResult} message VoteVoterResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteVoterResult.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.selections = [];
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.selections && message.selections.length) {
                object.selections = [];
                for (let j = 0; j < message.selections.length; ++j)
                    object.selections[j] = $root.game.VoteSelection.toObject(message.selections[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this VoteVoterResult to JSON.
         * @function toJSON
         * @memberof game.VoteVoterResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteVoterResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteVoterResult
         * @function getTypeUrl
         * @memberof game.VoteVoterResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteVoterResult.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteVoterResult";
        };

        return VoteVoterResult;
    })();

    game.VoteMessage = (function() {

        /**
         * Properties of a VoteMessage.
         * @typedef {Object} game.VoteMessage.$Properties
         * @property {string|null} [playerId] VoteMessage playerId
         * @property {string|null} [playerName] VoteMessage playerName
         * @property {string|null} [type] VoteMessage type
         * @property {string|null} [configId] VoteMessage configId
         * @property {game.VoteConfig.$Properties|null} [config] VoteMessage config
         * @property {Array.<game.VoteConfig.$Properties>|null} [configs] VoteMessage configs
         * @property {Array.<game.VoteTally.$Properties>|null} [tallies] VoteMessage tallies
         * @property {string|null} [selectedLabel] VoteMessage selectedLabel
         * @property {number|null} [totalParticipants] VoteMessage totalParticipants
         * @property {number|null} [votedCount] VoteMessage votedCount
         * @property {number|null} [remainingSeconds] VoteMessage remainingSeconds
         * @property {Array.<string>|null} [selectedLabels] VoteMessage selectedLabels
         * @property {Array.<game.VoteSelection.$Properties>|null} [selections] VoteMessage selections
         * @property {Array.<game.VoteVoterResult.$Properties>|null} [voterResults] VoteMessage voterResults
         * @property {string|null} [currentPlayerId] VoteMessage currentPlayerId
         * @property {string|null} [currentPlayerName] VoteMessage currentPlayerName
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoteMessage.
         * @memberof game
         * @interface IVoteMessage
         * @augments game.VoteMessage.$Properties
         * @deprecated Use game.VoteMessage.$Properties instead.
         */

        /**
         * Shape of a VoteMessage.
         * @typedef {game.VoteMessage.$Properties} game.VoteMessage.$Shape
         */

        /**
         * Constructs a new VoteMessage.
         * @memberof game
         * @classdesc Represents a VoteMessage.
         * @constructor
         * @param {game.VoteMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoteMessage(properties) {
            this.configs = [];
            this.tallies = [];
            this.selectedLabels = [];
            this.selections = [];
            this.voterResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteMessage playerId.
         * @member {string} playerId
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.playerId = "";

        /**
         * VoteMessage playerName.
         * @member {string} playerName
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.playerName = "";

        /**
         * VoteMessage type.
         * @member {string} type
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.type = "";

        /**
         * VoteMessage configId.
         * @member {string} configId
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.configId = "";

        /**
         * VoteMessage config.
         * @member {game.VoteConfig.$Properties|null|undefined} config
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.config = null;

        /**
         * VoteMessage configs.
         * @member {Array.<game.VoteConfig.$Properties>} configs
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.configs = $util.emptyArray;

        /**
         * VoteMessage tallies.
         * @member {Array.<game.VoteTally.$Properties>} tallies
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.tallies = $util.emptyArray;

        /**
         * VoteMessage selectedLabel.
         * @member {string} selectedLabel
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.selectedLabel = "";

        /**
         * VoteMessage totalParticipants.
         * @member {number} totalParticipants
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.totalParticipants = 0;

        /**
         * VoteMessage votedCount.
         * @member {number} votedCount
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.votedCount = 0;

        /**
         * VoteMessage remainingSeconds.
         * @member {number} remainingSeconds
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.remainingSeconds = 0;

        /**
         * VoteMessage selectedLabels.
         * @member {Array.<string>} selectedLabels
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.selectedLabels = $util.emptyArray;

        /**
         * VoteMessage selections.
         * @member {Array.<game.VoteSelection.$Properties>} selections
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.selections = $util.emptyArray;

        /**
         * VoteMessage voterResults.
         * @member {Array.<game.VoteVoterResult.$Properties>} voterResults
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.voterResults = $util.emptyArray;

        /**
         * VoteMessage currentPlayerId.
         * @member {string} currentPlayerId
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.currentPlayerId = "";

        /**
         * VoteMessage currentPlayerName.
         * @member {string} currentPlayerName
         * @memberof game.VoteMessage
         * @instance
         */
        VoteMessage.prototype.currentPlayerName = "";

        /**
         * Creates a new VoteMessage instance using the specified properties.
         * @function create
         * @memberof game.VoteMessage
         * @static
         * @param {game.VoteMessage.$Properties=} [properties] Properties to set
         * @returns {game.VoteMessage} VoteMessage instance
         * @type {{
         *   (properties: game.VoteMessage.$Shape): game.VoteMessage & game.VoteMessage.$Shape;
         *   (properties?: game.VoteMessage.$Properties): game.VoteMessage;
         * }}
         */
        VoteMessage.create = function create(properties) {
            return new VoteMessage(properties);
        };

        /**
         * Encodes the specified VoteMessage message. Does not implicitly {@link game.VoteMessage.verify|verify} messages.
         * @function encode
         * @memberof game.VoteMessage
         * @static
         * @param {game.VoteMessage.$Properties} message VoteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.configId != null && Object.hasOwnProperty.call(message, "configId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.configId);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.game.VoteConfig.encode(message.config, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.configs != null && message.configs.length)
                for (let i = 0; i < message.configs.length; ++i)
                    $root.game.VoteConfig.encode(message.configs[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.tallies != null && message.tallies.length)
                for (let i = 0; i < message.tallies.length; ++i)
                    $root.game.VoteTally.encode(message.tallies[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.selectedLabel != null && Object.hasOwnProperty.call(message, "selectedLabel"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.selectedLabel);
            if (message.totalParticipants != null && Object.hasOwnProperty.call(message, "totalParticipants"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.totalParticipants);
            if (message.votedCount != null && Object.hasOwnProperty.call(message, "votedCount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.votedCount);
            if (message.remainingSeconds != null && Object.hasOwnProperty.call(message, "remainingSeconds"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.remainingSeconds);
            if (message.selectedLabels != null && message.selectedLabels.length)
                for (let i = 0; i < message.selectedLabels.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.selectedLabels[i]);
            if (message.selections != null && message.selections.length)
                for (let i = 0; i < message.selections.length; ++i)
                    $root.game.VoteSelection.encode(message.selections[i], writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.voterResults != null && message.voterResults.length)
                for (let i = 0; i < message.voterResults.length; ++i)
                    $root.game.VoteVoterResult.encode(message.voterResults[i], writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.currentPlayerId != null && Object.hasOwnProperty.call(message, "currentPlayerId"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.currentPlayerId);
            if (message.currentPlayerName != null && Object.hasOwnProperty.call(message, "currentPlayerName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.currentPlayerName);
            return writer;
        };

        /**
         * Encodes the specified VoteMessage message, length delimited. Does not implicitly {@link game.VoteMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.VoteMessage
         * @static
         * @param {game.VoteMessage.$Properties} message VoteMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoteMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.VoteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.VoteMessage & game.VoteMessage.$Shape} VoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteMessage.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.configId = reader.string();
                        break;
                    }
                case 5: {
                        message.config = $root.game.VoteConfig.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        if (!(message.configs && message.configs.length))
                            message.configs = [];
                        message.configs.push($root.game.VoteConfig.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 7: {
                        if (!(message.tallies && message.tallies.length))
                            message.tallies = [];
                        message.tallies.push($root.game.VoteTally.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 8: {
                        message.selectedLabel = reader.string();
                        break;
                    }
                case 9: {
                        message.totalParticipants = reader.int32();
                        break;
                    }
                case 10: {
                        message.votedCount = reader.int32();
                        break;
                    }
                case 11: {
                        message.remainingSeconds = reader.int32();
                        break;
                    }
                case 12: {
                        if (!(message.selectedLabels && message.selectedLabels.length))
                            message.selectedLabels = [];
                        message.selectedLabels.push(reader.string());
                        break;
                    }
                case 13: {
                        if (!(message.selections && message.selections.length))
                            message.selections = [];
                        message.selections.push($root.game.VoteSelection.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 14: {
                        if (!(message.voterResults && message.voterResults.length))
                            message.voterResults = [];
                        message.voterResults.push($root.game.VoteVoterResult.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                case 15: {
                        message.currentPlayerId = reader.string();
                        break;
                    }
                case 16: {
                        message.currentPlayerName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.VoteMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.VoteMessage & game.VoteMessage.$Shape} VoteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteMessage message.
         * @function verify
         * @memberof game.VoteMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteMessage.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.configId != null && message.hasOwnProperty("configId"))
                if (!$util.isString(message.configId))
                    return "configId: string expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                let error = $root.game.VoteConfig.verify(message.config, long + 1);
                if (error)
                    return "config." + error;
            }
            if (message.configs != null && message.hasOwnProperty("configs")) {
                if (!Array.isArray(message.configs))
                    return "configs: array expected";
                for (let i = 0; i < message.configs.length; ++i) {
                    let error = $root.game.VoteConfig.verify(message.configs[i], long + 1);
                    if (error)
                        return "configs." + error;
                }
            }
            if (message.tallies != null && message.hasOwnProperty("tallies")) {
                if (!Array.isArray(message.tallies))
                    return "tallies: array expected";
                for (let i = 0; i < message.tallies.length; ++i) {
                    let error = $root.game.VoteTally.verify(message.tallies[i], long + 1);
                    if (error)
                        return "tallies." + error;
                }
            }
            if (message.selectedLabel != null && message.hasOwnProperty("selectedLabel"))
                if (!$util.isString(message.selectedLabel))
                    return "selectedLabel: string expected";
            if (message.totalParticipants != null && message.hasOwnProperty("totalParticipants"))
                if (!$util.isInteger(message.totalParticipants))
                    return "totalParticipants: integer expected";
            if (message.votedCount != null && message.hasOwnProperty("votedCount"))
                if (!$util.isInteger(message.votedCount))
                    return "votedCount: integer expected";
            if (message.remainingSeconds != null && message.hasOwnProperty("remainingSeconds"))
                if (!$util.isInteger(message.remainingSeconds))
                    return "remainingSeconds: integer expected";
            if (message.selectedLabels != null && message.hasOwnProperty("selectedLabels")) {
                if (!Array.isArray(message.selectedLabels))
                    return "selectedLabels: array expected";
                for (let i = 0; i < message.selectedLabels.length; ++i)
                    if (!$util.isString(message.selectedLabels[i]))
                        return "selectedLabels: string[] expected";
            }
            if (message.selections != null && message.hasOwnProperty("selections")) {
                if (!Array.isArray(message.selections))
                    return "selections: array expected";
                for (let i = 0; i < message.selections.length; ++i) {
                    let error = $root.game.VoteSelection.verify(message.selections[i], long + 1);
                    if (error)
                        return "selections." + error;
                }
            }
            if (message.voterResults != null && message.hasOwnProperty("voterResults")) {
                if (!Array.isArray(message.voterResults))
                    return "voterResults: array expected";
                for (let i = 0; i < message.voterResults.length; ++i) {
                    let error = $root.game.VoteVoterResult.verify(message.voterResults[i], long + 1);
                    if (error)
                        return "voterResults." + error;
                }
            }
            if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                if (!$util.isString(message.currentPlayerId))
                    return "currentPlayerId: string expected";
            if (message.currentPlayerName != null && message.hasOwnProperty("currentPlayerName"))
                if (!$util.isString(message.currentPlayerName))
                    return "currentPlayerName: string expected";
            return null;
        };

        /**
         * Creates a VoteMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.VoteMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.VoteMessage} VoteMessage
         */
        VoteMessage.fromObject = function fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.type != null)
                message.type = String(object.type);
            if (object.configId != null)
                message.configId = String(object.configId);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".game.VoteMessage.config: object expected");
                message.config = $root.game.VoteConfig.fromObject(object.config, long + 1);
            }
            if (object.configs) {
                if (!Array.isArray(object.configs))
                    throw TypeError(".game.VoteMessage.configs: array expected");
                message.configs = [];
                for (let i = 0; i < object.configs.length; ++i) {
                    if (typeof object.configs[i] !== "object")
                        throw TypeError(".game.VoteMessage.configs: object expected");
                    message.configs[i] = $root.game.VoteConfig.fromObject(object.configs[i], long + 1);
                }
            }
            if (object.tallies) {
                if (!Array.isArray(object.tallies))
                    throw TypeError(".game.VoteMessage.tallies: array expected");
                message.tallies = [];
                for (let i = 0; i < object.tallies.length; ++i) {
                    if (typeof object.tallies[i] !== "object")
                        throw TypeError(".game.VoteMessage.tallies: object expected");
                    message.tallies[i] = $root.game.VoteTally.fromObject(object.tallies[i], long + 1);
                }
            }
            if (object.selectedLabel != null)
                message.selectedLabel = String(object.selectedLabel);
            if (object.totalParticipants != null)
                message.totalParticipants = object.totalParticipants | 0;
            if (object.votedCount != null)
                message.votedCount = object.votedCount | 0;
            if (object.remainingSeconds != null)
                message.remainingSeconds = object.remainingSeconds | 0;
            if (object.selectedLabels) {
                if (!Array.isArray(object.selectedLabels))
                    throw TypeError(".game.VoteMessage.selectedLabels: array expected");
                message.selectedLabels = [];
                for (let i = 0; i < object.selectedLabels.length; ++i)
                    message.selectedLabels[i] = String(object.selectedLabels[i]);
            }
            if (object.selections) {
                if (!Array.isArray(object.selections))
                    throw TypeError(".game.VoteMessage.selections: array expected");
                message.selections = [];
                for (let i = 0; i < object.selections.length; ++i) {
                    if (typeof object.selections[i] !== "object")
                        throw TypeError(".game.VoteMessage.selections: object expected");
                    message.selections[i] = $root.game.VoteSelection.fromObject(object.selections[i], long + 1);
                }
            }
            if (object.voterResults) {
                if (!Array.isArray(object.voterResults))
                    throw TypeError(".game.VoteMessage.voterResults: array expected");
                message.voterResults = [];
                for (let i = 0; i < object.voterResults.length; ++i) {
                    if (typeof object.voterResults[i] !== "object")
                        throw TypeError(".game.VoteMessage.voterResults: object expected");
                    message.voterResults[i] = $root.game.VoteVoterResult.fromObject(object.voterResults[i], long + 1);
                }
            }
            if (object.currentPlayerId != null)
                message.currentPlayerId = String(object.currentPlayerId);
            if (object.currentPlayerName != null)
                message.currentPlayerName = String(object.currentPlayerName);
            return message;
        };

        /**
         * Creates a plain object from a VoteMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.VoteMessage
         * @static
         * @param {game.VoteMessage} message VoteMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.configs = [];
                object.tallies = [];
                object.selectedLabels = [];
                object.selections = [];
                object.voterResults = [];
            }
            if (options.defaults) {
                object.playerId = "";
                object.playerName = "";
                object.type = "";
                object.configId = "";
                object.config = null;
                object.selectedLabel = "";
                object.totalParticipants = 0;
                object.votedCount = 0;
                object.remainingSeconds = 0;
                object.currentPlayerId = "";
                object.currentPlayerName = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.configId != null && message.hasOwnProperty("configId"))
                object.configId = message.configId;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.game.VoteConfig.toObject(message.config, options, _depth + 1);
            if (message.configs && message.configs.length) {
                object.configs = [];
                for (let j = 0; j < message.configs.length; ++j)
                    object.configs[j] = $root.game.VoteConfig.toObject(message.configs[j], options, _depth + 1);
            }
            if (message.tallies && message.tallies.length) {
                object.tallies = [];
                for (let j = 0; j < message.tallies.length; ++j)
                    object.tallies[j] = $root.game.VoteTally.toObject(message.tallies[j], options, _depth + 1);
            }
            if (message.selectedLabel != null && message.hasOwnProperty("selectedLabel"))
                object.selectedLabel = message.selectedLabel;
            if (message.totalParticipants != null && message.hasOwnProperty("totalParticipants"))
                object.totalParticipants = message.totalParticipants;
            if (message.votedCount != null && message.hasOwnProperty("votedCount"))
                object.votedCount = message.votedCount;
            if (message.remainingSeconds != null && message.hasOwnProperty("remainingSeconds"))
                object.remainingSeconds = message.remainingSeconds;
            if (message.selectedLabels && message.selectedLabels.length) {
                object.selectedLabels = [];
                for (let j = 0; j < message.selectedLabels.length; ++j)
                    object.selectedLabels[j] = message.selectedLabels[j];
            }
            if (message.selections && message.selections.length) {
                object.selections = [];
                for (let j = 0; j < message.selections.length; ++j)
                    object.selections[j] = $root.game.VoteSelection.toObject(message.selections[j], options, _depth + 1);
            }
            if (message.voterResults && message.voterResults.length) {
                object.voterResults = [];
                for (let j = 0; j < message.voterResults.length; ++j)
                    object.voterResults[j] = $root.game.VoteVoterResult.toObject(message.voterResults[j], options, _depth + 1);
            }
            if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                object.currentPlayerId = message.currentPlayerId;
            if (message.currentPlayerName != null && message.hasOwnProperty("currentPlayerName"))
                object.currentPlayerName = message.currentPlayerName;
            return object;
        };

        /**
         * Converts this VoteMessage to JSON.
         * @function toJSON
         * @memberof game.VoteMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoteMessage
         * @function getTypeUrl
         * @memberof game.VoteMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoteMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/game.VoteMessage";
        };

        return VoteMessage;
    })();

    registerStaticMessageConstructors(game);

    return game;
})();

function registerStaticMessageConstructors(namespace) {
    for (const key of Object.keys(namespace)) {
        const value = namespace[key];
        if (typeof value !== "function" || value.ctor) continue;
        Object.defineProperty(value, "ctor", {
            value,
            writable: true,
            configurable: true
        });
    }
}

export {
  $root as default
};
