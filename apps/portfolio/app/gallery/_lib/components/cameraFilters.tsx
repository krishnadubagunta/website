import Filter from "kd-ui/ui/filter"
import CameraTypes from "../cameraTypes"

export default async function CameraFilters() {
    const filters = await CameraTypes()
    return <Filter filterKey="cameraType" filters={filters} />
}