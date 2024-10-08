import {BaseService} from "../shared/service/baseService.js";
import {userProfileRepository} from "./userProfileRepository.js";
import {imageRepository} from "../files/images/imageRepository";
import {imageGet} from "../files/images/image.methods";
import {Images} from "../files/images/database/images";

class UserProfileService extends BaseService {
  constructor({repository, imageRepository}) {
    super({repository});
    this.imageRepository = imageRepository;
  }

  /**
   * @param _id {string}
   * @return {Promise<string>}
   */
  async create(_id) {
    return this.repository.insertAsync({_id});
  }

  async edit(userId, object) {
    return this.repository.updateAsync({
      _id: userId
    }, {
      $set: object
    });
  }

  async saveOtp(userId, otp) {
    return this.repository.updateAsync({
      _id: userId
    }, {
      $set: {
        otp,
        otpAt: new Date()
      }
    });
  }

  async getByOtp(otp) {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 1);

    return this.repository.findOneAsync({
      otp,
      otpAt: {
        $gte: date
      }
    });
  }

  async saveProfilePictureId(fileId) {
    const image = await this.imageRepository.findOneAsync({_id: fileId});
    const userId = image.userId;

    const pictureUrl = image.versions.original.meta.pipePath;
    console.log(pictureUrl);

    return this.repository.updateAsync({
      _id: userId
    }, {
      $set: {
        pictureId: fileId,
        pictureUrl: pictureUrl
      }
    });
  }

  async updatePayload(userId, payload) {
    return this.repository.updateAsync({
      _id: userId
    }, {
      $set: payload
    });
  }
}

export const userProfileService = new UserProfileService({
  repository: userProfileRepository,
  imageRepository: Images.collection
});
