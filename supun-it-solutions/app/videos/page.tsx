import { SectionTitle } from "@/src/components/ui";
import { VideoPlayer } from "@/src/components/video-player";
const videos=["Company Showreel","Project Demonstrations","System Walkthroughs","Development Highlights"];
export default function Videos(){return <><section className="simple-hero"><SectionTitle label="VIDEOS" title="See Our Work in Action" desc="A growing collection of showreels, product demonstrations and behind-the-scenes development highlights." center/></section><section className="section video-grid">{videos.map((v,i)=><article key={v}><VideoPlayer title={v} src={`/videos/placeholder-${i+1}.mp4`}/><h2>{v}</h2><p>Media will be added as the content library is finalized.</p></article>)}</section></>}
