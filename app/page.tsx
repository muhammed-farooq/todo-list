import Form from "@/components/Form";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="main_padding_x main_padding_y">
      <Header />
      <Welcome />
      <Form/>
    </div>
  );
}
