import { ChargeBee, _item, _item_price } from 'chargebee-typescript'
import { v4 } from 'uuid'

function init() {
  const site = process.env.CHARGEBEE_SITE
  const api_key = process.env.CHARGEBEE_APIKEY
  const chargebee: ChargeBee = new ChargeBee()

  chargebee.configure({
    site,
    api_key,
  })
  return chargebee
}

async function createItemAndItemPrice() {
  const familyId = process.env.FAMILY_ID
  const chargebee = init()

  // create new item
  const item: _item.create_params = {
    id: v4(),
    name: v4(),
    type: 'addon',
    item_family_id: familyId,
    metered: true,
    usage_calculation: 'sum_of_usages',
    metadata: { itemTest: '123', itemTest2: '321' },
    unit: 'testunit',
  }
  const itemResult = await chargebee.item.create(item).request(() => {})
  console.log(itemResult.item)

  const itemPrice: _item_price.create_params = {
    id: v4(),
    name: v4(),
    item_id: itemResult.item.id,
    price: 1000,
    pricing_model: 'per_unit',
    period: 1,
    period_unit: 'month',
    metadata: { itemPriceTest: '123', itemPriceTest2: '321' },
    free_quantity: 100,
  }
  const itemPriceResult = await chargebee.item_price
    .create(itemPrice)
    .request(() => {})
  console.log(itemPriceResult.item_price)
}

createItemAndItemPrice()
