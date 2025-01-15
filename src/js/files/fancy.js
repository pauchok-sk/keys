import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancy() {
  Fancybox.bind('[data-fancybox="porfolio"]', {});
  Fancybox.bind('[data-fancybox="works"]', {});
  Fancybox.bind('[data-fancybox="maps"]', {});
  Fancybox.bind('[data-fancybox="socials"]', {});
  Fancybox.bind('[data-fancybox="about"]', {});
  Fancybox.bind('[data-fancybox="gallery"]', {});
}
