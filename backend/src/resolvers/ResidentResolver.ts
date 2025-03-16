import { Query, Resolver } from "type-graphql";
import { Resident } from "../entities/Resident";

@Resolver(Resident)
class ResidentResolver {
  @Query(() => [Resident])
  async getAllResidents() {
    const residents = await Resident.find({});
    return residents;
  }
}

export default ResidentResolver;
