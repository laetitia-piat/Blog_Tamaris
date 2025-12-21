import { Arg, Query, Resolver } from "type-graphql";
import { Resident } from "../entities/Resident";

@Resolver(Resident)
class ResidentResolver {
  @Query(() => [Resident])
  async getAllResidents() {
    const residents = await Resident.find({});
    return residents;
  }

  @Query(() => Resident)
  async getResidentById(@Arg("id") id: number) {
    const resident = await Resident.findOne({ where: { id } });
    return resident;
  }
}

export default ResidentResolver;
