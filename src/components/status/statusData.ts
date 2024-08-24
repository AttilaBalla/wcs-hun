export enum CompetitionStatus {
  waiting = 'waiting',
  marshalling = 'marshalling',
  dancing = 'dancing',
  finished = 'finished',
  results = 'results',
}

export const statusData = [
  {
    text: '19:00 Novice Prelim',
    status: CompetitionStatus.results,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.finished,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.finished,
      },
    ]
  },
  {
    text: '19:30 Newcomer Prelim',
    status: CompetitionStatus.finished,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.finished,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.finished,
      },
    ]
  },
  {
    text: '20:00 Intermediate Prelim',
    status: CompetitionStatus.dancing,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.marshalling,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.waiting,
      },
    ]
  },
  {
    text: '21:00 Novice Finals',
    status: CompetitionStatus.waiting,
  },
  {
    text: '21:20 Newcomer Finals',
    status: CompetitionStatus.waiting,
  },
  {
    text: '21:45 Intermediate Finals',
    status: CompetitionStatus.waiting,
  },
  {
    text: '22:30 Advanced/AllStar Finals',
    status: CompetitionStatus.waiting,
  },

]