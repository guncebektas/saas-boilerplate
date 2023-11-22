import {BaseRepository} from "../shared/repository/baseRepository.js";
import {Profiles} from "./database/profiles.js";
import {BaseService} from "../shared/service/baseService.js";
import {profileRepository} from "./profileRepository.js";

class ProfileService extends BaseService {
  /**
   * @param _id {string}
   * @return {Promise<string>}
   */
  async add(_id) {
    return profileRepository.insertAsync({_id});
  }
}

export const profileService = new ProfileService();
