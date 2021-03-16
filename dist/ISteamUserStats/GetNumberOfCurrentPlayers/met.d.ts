import { app_id } from "../../shared/app_id";
declare function GetNumberOfCurrentPlayers(app_id: app_id): Promise<{
    player_count?: import("../../core/data_types").uint | undefined;
    result: number;
}>;
export { GetNumberOfCurrentPlayers };
