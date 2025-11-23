import { Module } from "@nestjs/common";
import { UreferralsController } from "./referrals.controller";
import { UreferralsService } from "./referrals.service";

@Module({
  controllers: [UreferralsController],
  providers: [UreferralsService],
})
export class UreferralsModule {}
