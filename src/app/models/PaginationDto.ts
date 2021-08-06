export class PaginationDto {
    PageNumber: Number = 1;
    PageSize: Number = 10;
    PlatformId: Number = -1; // -1 means all platforms
    RaceId: Number = -1; // -1 means all races
}