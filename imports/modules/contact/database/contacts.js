import {Mongo} from 'meteor/mongo';
import {COLLECTION_NAME} from "../../shared/enums/collectionNames.js";

export const Contacts = new Mongo.Collection(COLLECTION_NAME.CONTACTS);
