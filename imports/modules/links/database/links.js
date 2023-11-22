import { Mongo } from 'meteor/mongo';
import {COLLECTION_NAME} from "../../../enums/collectionNames.js";

export const Links = new Mongo.Collection(COLLECTION_NAME.LINKS);
