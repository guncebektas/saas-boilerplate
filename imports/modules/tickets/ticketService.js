import {BaseService} from "../shared/service/baseService.js";
import {ticketRepository} from "./ticketRepository.js";

class TicketService extends BaseService {
  /**
   * @param _id {string} [optional]
   * @param message {string}
   * @return {Promise<void>}
   */
  async upsert({_id, message}) {
    return ticketRepository.upsertAsync({
      _id
    }, {
      $set: {
        message
      }
    });
  }
}

export const ticketService = new TicketService();
