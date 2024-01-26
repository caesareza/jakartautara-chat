import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative flex h-full">
      <div className="flex-shrink-0 dark overflow-x-hidden bg-black invisible lg:visible">
        <div className="h-full w-0 lg:w-[260px] lg:p-5 flex flex-col">
          <div className="flex items-center">
            <div className="thumb w-[30px] h-[30px] rounded-full bg-white mr-2"></div>
            <div>New Chat</div>
            <button className="ml-auto">Edit</button>
          </div>
          <div className="mt-auto flex items-center">
            <div className="thumb w-[30px] h-[30px] rounded-full bg-white mr-2"></div>
            <div>Nisa Sabyan</div>
          </div>
        </div>
      </div>
      <div className="w-full p-6 bg-slate-600 flex flex-col">
        <div className="flex items-center mb-5">
          <div className="font-bold">Chat Jakarta Pusat</div>
          <button className="ml-auto border border-white rounded px-3">
            Edit
          </button>
        </div>
        <div className="w-full lg:w-[46rem] mx-auto h-full overflow-y-scroll space-y-5">
          <p>
            Cake dragée caramels danish tart marshmallow pastry halvah gummi
            bears. Icing powder gummi bears oat cake jujubes. Carrot cake
            jelly-o pie jelly-o candy lemon drops. Topping pudding gummi bears
            shortbread gummies cupcake icing. Liquorice sesame snaps icing
            marshmallow chocolate cake. Croissant cheesecake icing toffee carrot
            cake ice cream. Gummi bears chocolate cake cupcake pie macaroon.{" "}
          </p>
          <p>
            Cake dragée caramels danish tart marshmallow pastry halvah gummi
            bears. Icing powder gummi bears oat cake jujubes. Carrot cake
            jelly-o pie jelly-o candy lemon drops. Topping pudding gummi bears
            shortbread gummies cupcake icing. Liquorice sesame snaps icing
            marshmallow chocolate cake. Croissant cheesecake icing toffee carrot
            cake ice cream. Gummi bears chocolate cake cupcake pie macaroon.{" "}
          </p>
          <p>
            Cake dragée caramels danish tart marshmallow pastry halvah gummi
            bears. Icing powder gummi bears oat cake jujubes. Carrot cake
            jelly-o pie jelly-o candy lemon drops. Topping pudding gummi bears
            shortbread gummies cupcake icing. Liquorice sesame snaps icing
            marshmallow chocolate cake. Croissant cheesecake icing toffee carrot
            cake ice cream. Gummi bears chocolate cake cupcake pie macaroon.{" "}
          </p>
          <p>
            Cake dragée caramels danish tart marshmallow pastry halvah gummi
            bears. Icing powder gummi bears oat cake jujubes. Carrot cake
            jelly-o pie jelly-o candy lemon drops. Topping pudding gummi bears
            shortbread gummies cupcake icing. Liquorice sesame snaps icing
            marshmallow chocolate cake. Croissant cheesecake icing toffee carrot
            cake ice cream. Gummi bears chocolate cake cupcake pie macaroon.{" "}
          </p>
          <p>
            Cake dragée caramels danish tart marshmallow pastry halvah gummi
            bears. Icing powder gummi bears oat cake jujubes. Carrot cake
            jelly-o pie jelly-o candy lemon drops. Topping pudding gummi bears
            shortbread gummies cupcake icing. Liquorice sesame snaps icing
            marshmallow chocolate cake. Croissant cheesecake icing toffee carrot
            cake ice cream. Gummi bears chocolate cake cupcake pie macaroon.{" "}
          </p>
          <p>
            Jelly bear claw marzipan tart jelly-o cake liquorice toffee bonbon.
            Macaroon dragée soufflé oat cake cupcake cupcake sesame snaps
            marzipan. Biscuit tiramisu shortbread liquorice jelly-o cotton
            candy. Carrot cake sugar plum cotton candy chocolate cake candy
            powder. Toffee pastry marzipan liquorice shortbread pudding gummi
            bears jelly beans jujubes.
          </p>
        </div>
        <div className="w-full lg:w-[48rem] mx-auto mt-auto border border-gray flex p-3 rounded-lg">
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Message ..."
          />
          <button type="button" className="bg-amber-500 p-2">
            Submit
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
