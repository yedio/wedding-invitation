import Layout from "@components/layout/common/Layout";
import ContentLayout from "@components/layout/ContentLayout";
import CoverLayout from "@components/layout/CoverLayout";
import FooterLayout from "@components/layout/FooterLayout";
import { listPublicGalleryImages } from "@libs/server/listPublicGalleryImages";

export default async function Home() {
  const galleryImages = listPublicGalleryImages("img/pictures/zip");

  return (
    <Layout>
      <CoverLayout />
      <ContentLayout galleryImages={galleryImages} />
      <FooterLayout />
    </Layout>
  );
}
