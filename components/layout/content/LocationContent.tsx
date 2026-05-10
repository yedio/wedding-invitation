import { LineBreaker } from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "../common/Layout";
import { info } from "@libs/client/InfoData";
import MapLayout from "@components/MapLayout";
import { WayToComeForm } from "../ContentLayout";

/** 서울 지하철 8호선 공식 계통색 */
const LINE_8_COLOR = "#E6186C";
/** 시내버스 유형별 안내용 색 (간선·지선·광역 등 구분) */
const BUS_COLORS = {
  ilban: "#5c8fbf",
  ganseon: "#3d5bab",
  jiseon: "#53b332",
  gwangyeok: "#c8232c",
} as const;

export const LocationContent = () => {
  const { location } = info;
  return (
    <Wrapper providedStyle="!px-0">
      <FormWithTitle title={"오시는 길"}>
        <div className="flex flex-col items-center space-y-3">
          <div className="text-center text-16 leading-[30px]">
            {LineBreaker(location.address)}
          </div>
          <p className="text-15">☎️ 031-333-6114</p>
        </div>
        <MapLayout
          address={location.address}
          mapAddress={{
            kakao: location.mapAddress.kakao,
            naver: location.mapAddress.naver,
            tmap: location.mapAddress.tmap,
          }}
        />
        <div className="flex w-full flex-col items-center space-y-4 px-6 sm:px-8">
          <WayToComeForm
            title="🚆 지하철 이용"
            lineItems={[
              {
                color: LINE_8_COLOR,
                text: "8호선 문정역 3번 출구 도보 5분",
              },
            ]}
          />
          <WayToComeForm
            title="🚌 버스 이용"
            lineItems={[
              {
                color: BUS_COLORS.ilban,
                text: "일반 : 30, 31, 32, 100, 119, 331",
              },
              {
                color: BUS_COLORS.jiseon,
                text: "지선 : 3322, 3420",
              },
              {
                color: BUS_COLORS.ganseon,
                text: "간선 : 302, 303, 320, 333, 343, 345, 350, 360, 422, N13, N37",
              },
              {
                color: BUS_COLORS.gwangyeok,
                text: "직행, 광역 : 500-1, 1009, 1112, 1117, 1650, 3302",
              },
            ]}
            descriptions={[
              "※문정법조단지·건영아파트 정류소에서 하차 후 도보 4분"
            ]}
          />
          <WayToComeForm
            title="🅿️ 주차"
            descriptions={[
              "자가용 이용 시\n해당건물 지하2층~지하5층 400대,\n외부 300대 가능\n\n하객 2시간 무료 주차\n하객용 2시간 무료 주차권은 식사하시는 연회장 입구\n안내데스크에서 발행해 드립니다.",
            ]}
          />
        </div>
      </FormWithTitle>
    </Wrapper>
  );
};
