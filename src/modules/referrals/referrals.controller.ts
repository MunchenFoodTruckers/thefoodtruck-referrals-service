import { Controller, Get } from "@nestjs/common";

@Controller()
export class UreferralsController {
  @Get("/api/referrals/health")
  health() {
    return { ok: true, service: "referrals" };
  }

  @Get("/api/referrals")
  findAll() {
    return [];
  }
}
