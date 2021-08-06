export class DataList {
    Username: string;
    Country: string;
    Vehicle: string;
    Time: string;
    Platform: string;
    RaceId: Number;
}

export class LeaderboardOutputDto {
    TotalCount: Number;
    List: DataList[] = [];
}