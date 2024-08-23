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
    status: CompetitionStatus.waiting,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.waiting,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.waiting,
      },
    ]
  },
  {
    text: '19:30 Newcomer Prelim',
    status: CompetitionStatus.waiting,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.waiting,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.waiting,
      },
    ]
  },
  {
    text: '20:00 Intermediate Prelim',
    status: CompetitionStatus.waiting,
    heats: [
      {
        text: 'Heat 1',
        status: CompetitionStatus.waiting,
      },
      {
        text: 'Heat 2',
        status: CompetitionStatus.waiting,
      },
    ]
  },
]