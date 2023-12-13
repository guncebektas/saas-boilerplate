import {BaseService} from "../shared/service/baseService.js";
import {ticketRepository} from "./ticketRepository.js";

class TicketService extends BaseService {
  /**
   * @param object {object}
   * @return {Promise<void>}
   */
  async upsert(object) {
    return ticketRepository.upsertAsync({
      _id: object?._id
    }, {
      $set: object
    });
  }
}

export const ticketService = new TicketService();
