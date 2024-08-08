import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CategoryPanel} from "@/components/comp/CategoryPanel";
import {sectionTitle} from "@/utils/typography";
import {Stack} from "@mui/material";
import {
  competitionNotes,
  textCompetitionCategoriesDescription,
  textAdvancedDescription,
  textIntermediateDescription,
  textNewcomerDescription,
  textNoviceDescription
} from "@/texts/competitionView";

export function CompetitionView() {
  return (
    <PageContainer>
      <Typography sx={sectionTitle}>
        Verseny
      </Typography>
      <Typography>
        {textCompetitionCategoriesDescription}
      </Typography>
      <CategoryPanel
        title={'Newcomer'}
        description={textNewcomerDescription}
      />
      <CategoryPanel
        title={'Novice'}
        description={textNoviceDescription}
      />
      <CategoryPanel
        title={'Intermediate'}
        description={textIntermediateDescription}
      />
      <CategoryPanel
        title={'Advanced/Allstar'}
        description={textAdvancedDescription}
      />
      <Typography sx={sectionTitle}>
        {competitionNotes.title}
      </Typography>
      <Stack spacing={2}>
        <Typography>
          {competitionNotes.p1}
        </Typography>
        <Typography>
          <b>{competitionNotes.secondaryRolesTitle}</b>
        </Typography>
        <Typography>
          {competitionNotes.p2}
        </Typography>
        <Typography>
          {competitionNotes.p3}
        </Typography>
      </Stack>
    </PageContainer>
  )
}