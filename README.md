# btc-naira-api
BTC Naira API

### Endpoints

GET `/user/:user_id`
```
{
  ...user data
}

```

GET `/transactions/:user_id`

```
{
  ...user transactions
}
```

GET `/beneficiaries/:user_id`

```
{
  ... user beneficiaries (truncated for security)
}

POST `/order`
```
-> Req Body
```
[
  {
    user_data
  }, 
  {
    transaction_data
  }]
```

-> Response
```
{
  ...transaction_id,
  ...transaction status
}
```
