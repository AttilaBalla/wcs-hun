import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CategoryPanel} from "@/components/comp/CategoryPanel";

export function CompetitionInfo() {
  return (
    <PageContainer>
      <Typography variant="h4" align="center" component="h2" sx={{py: '2rem'}}>
        Verseny
      </Typography>
      <Typography>
        Idén négy szinten szeretnénk meghirdetni a versenyt. A versenyre való regisztrációt a WSDC szintek szerint bonyolítjuk le.
        A négy verseny csoport a következő:
      </Typography>
      <CategoryPanel
        title={'Newcomer'}
        description={'Olyan versenyzők, akik még nem rendelkeznek WSDC ponttal, és szeretnék kipróbálni magukat egy versenyen.'}
      />
      <CategoryPanel
        title={'Novice'}
        description={'Akik nem rendelkeznek WSDC ponttal, vagy már van Newcomer vagy Novice szinten pontjuk és maximum 15 Novice ponttal rendelkeznek.'}
      />
      <CategoryPanel
        title={'Intermediate'}
        description={'Akiknek minimum 16 Novice pontjuk van, vagy maximum 29 Intermediate ponttal rendelkeznek.'}
      />
      <CategoryPanel
        title={'Advanced/Allstar'}
        description={'Akik minimum 30 intermediate ponttal rendelkeznek és vállalják a "self judge" rendszerben lévő verseny lebonyolítást.'}
      />
      <Typography variant="h4" align="center" component="h2" sx={{py: '2rem'}}>
        Megkötések
      </Typography>
      <Typography>
        A newcomer kategóriát kizárólag a kezdő versenyzők számára szeretnénk fenntartani, hogy egy jó versenyélménnyel lehessenek gazdagabbak, így nem áll módunkban engedélyezni, hogy másodlagos szerepben induljon bárki a versenyen.
        Ennek megfelelően, <b>ha indulsz magasabb kategóriában az eredeti szerepkörödben és/vagy rendelkezel már WSDC ponttal, akkor Newcomerben nem indulhatsz az ellenkező szerepben sem.</b> Magasabb szinten ez engedélyezett (Inter follower/leader, vagy advanced follower leader indulhat novice, illetve intermediate szinten fordított szerepben).

        Elsődleges célunk ezzel, hogy támogassuk és bátorítsuk a kezdő versenyzőket. Köszönjük a megértést!

      </Typography>
    </PageContainer>
  )
}