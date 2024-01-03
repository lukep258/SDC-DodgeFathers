import ProductImages from './ProductImages'

export default function Product({toggleModal}) {

    return (
        <div className="flex justify-center w-100 mt-10">
            <div className="w-3/5 border-2 border-black">
                < ProductImages toggleModal={toggleModal}/>
                {/* >>>>>> Place Holder For Right Column <<<<<< */}
            </div>
        </div>
    )
}