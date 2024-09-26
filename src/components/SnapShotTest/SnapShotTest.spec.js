import { fireEvent, render, screen} from "@testing-library/react"
import SnapShotTest from "./SnapShotTest"

test("snapshot for SnapshotTest component", ()=>{

    const container = render(<SnapShotTest/>)
    expect(container).toMatchSnapshot()
})