import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { CryptoState } from "../../CryptoContext";

import "./style.scss";
import { CoinList } from "../../api/api";
import { useNavigate } from "react-router-dom";

interface IProps {}

export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable: React.FC<IProps> = () => {
  const navigate = useNavigate();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    // console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin: any) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="conistable">
      <Container className="my-5">
        <h5
          className="mb-5 text-center"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Cryptocurrency Prices by Market Cap
        </h5>
        <div className="searchbar">
          <BiSearch size={24} />
          <input
            className="search_input"
            type="text"
            placeholder="Search for a Crypto currency..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="coinstable_info mt-5">
          <Table responsive="md" hover>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {handleSearch().map((item: any) => {
                const profit: any = item.price_change_percentage_24h > 0;
                return (
                  <tr
                    key={item.name}
                    onClick={() => navigate(`/coins/${item.id}`)}
                  >
                    <td style={{ display: "flex", gap: "20px" }}>
                      <img
                        src={item?.image}
                        alt={item.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {item.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>{item.name}</span>
                      </div>
                    </td>
                    <td>
                      {symbol} {numberWithCommas(item.current_price.toFixed(2))}
                    </td>
                    <td
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>
                      {symbol}{" "}
                      {numberWithCommas(
                        item.market_cap.toString().slice(0, -6)
                      )}
                      M
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};
export default CoinsTable;
