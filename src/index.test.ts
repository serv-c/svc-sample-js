import axios from "axios";
import server, { route } from "./index";
import { ResponseArtifact } from "servc-svc-lib-server/dist/lib/conventions/spec/response";

beforeAll(async () => server.start());

it("resolve simple task", async () => {
  const data = await axios
    .post<any, { data: string }>("http://localhost:3000", {
      route,
      argument: { method: "complex", inputs: { argument: true } },
    })
    .catch((e) => console.log(e));
  expect(data).toBeTruthy();
  if (data && data.data) {
    const { data: jobid } = data;
    expect(jobid).toBeTruthy();

    // get the value of the job
    const { data: response } = await axios.get<
      any,
      { data: ResponseArtifact<string> }
    >(`http://localhost:3000/id/${jobid}`);
    expect(response.responseBody).toBe("complex");
    expect(response.statusCode).toBe(200);
    expect(response.progress).toBe(1);
  }
});
