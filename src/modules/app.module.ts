import { Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ReferralsModule } from "./referrals/referrals.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ReferralsModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule {}
