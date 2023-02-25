import axios from "axios";
import React, { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { SingleCoin } from "../../api/api";
import { CryptoState } from "../../CryptoContext";
import { Col, Container, Row } from "react-bootstrap";
import { numberWithCommas } from "../../Components/CoinsTable/CoinsTable";

interface IProps {}

const CoinPage: React.FC<IProps> = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<any>();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  console.log(coin);

  return (
    <div className="coinsPage">
      <Container>
        <Row>
          <Col md={12}>
            <div className="coinPage_info">
              <img
                src={coin?.image.large}
                alt={coin?.name}
                height="200"
                style={{ margin: "20px 0px" }}
              />
              <h4>{coin?.name}</h4>
              <p>{HTMLReactParser(coin?.description.en.split(". ")[0])}.</p>

              <div className="marketData">
                <span style={{ display: "flex" }}>
                  <h5 className="heading">Rank:</h5>
                  &nbsp; &nbsp;
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    {numberWithCommas(coin?.market_cap_rank)}
                  </h5>
                </span>

                <span style={{ display: "flex" }}>
                  <h5 className="heading">Current Price:</h5>
                  &nbsp; &nbsp;
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    {symbol}{" "}
                    {numberWithCommas(
                      coin?.market_data.current_price[currency.toLowerCase()]
                    )}
                  </h5>
                </span>
                <span style={{ display: "flex" }}>
                  <h5 className="heading">Market Cap:</h5>
                  &nbsp; &nbsp;
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    {symbol}{" "}
                    {numberWithCommas(
                      coin?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    )}
                    M
                  </h5>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CoinPage;
