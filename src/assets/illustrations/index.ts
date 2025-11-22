import { HackathonIllustration } from './HackathonIllustration';
import { DesignIllustration } from './DesignIllustration';
import { RobotIllustration } from './RobotIllustration';
import { MusicIllustration } from './MusicIllustration';
import { MentalistIllustration } from './MentalistIllustration';
import { AutoExpoIllustration } from './AutoExpoIllustration';
import { HardwareIllustration } from './HardwareIllustration';
import { Web3Illustration } from './Web3Illustration';

export { HackathonIllustration, DesignIllustration, RobotIllustration, MusicIllustration, MentalistIllustration, AutoExpoIllustration, HardwareIllustration, Web3Illustration };

// Illustration mapping for easy access
export const illustrations = {
  hackathon: HackathonIllustration,
  design: DesignIllustration,
  robot: RobotIllustration,
  music: MusicIllustration,
  mentalist: MentalistIllustration,
  autoexpo: AutoExpoIllustration,
  hardware: HardwareIllustration,
  web3: Web3Illustration,
} as const;

export type IllustrationName = keyof typeof illustrations;
