"use client"
import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type LatestOrderItemProps = {
    order: OrderWithProducts
}

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
      <div className="bg-white shadow p-5 space-y-5 rounded-lg">
          <p className="text-2xl font-bold text-slate-600">
              Cliente: {order.name}              
          </p>

          <ul
              className="divide-y devide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
              role="list"          
          >
              {order.orderProducts.map(product => (
                  <li
                      key={product.id}
                      className="flex py-6 text-lg"
                  >
                      <p>
                          <span className="font-bold">
                              ({product.quantity}) {''}
                          </span>
                          {product.product.name}
                      </p>                     
                    
                  </li>                  
                  
              ))}
              
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total ojo ojo.. Cancelado:</dt>
                  <dd className="text-base font-medium text-gray-900">{formatCurrency(order.total)}                   

                                         
                  </dd>
             </div>


          </ul>
      
      </div>
  )
}
