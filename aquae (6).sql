-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2019 at 02:40 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquae`
--

-- --------------------------------------------------------

--
-- Table structure for table `accepted_orders`
--

CREATE TABLE `accepted_orders` (
  `accept_id` int(255) NOT NULL,
  `order_id` int(255) NOT NULL,
  `prod_id` int(255) NOT NULL,
  `cons_id` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `delivery_fee` int(11) NOT NULL,
  `total` int(255) NOT NULL,
  `date_of_delivery` date NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '96f81a35ee2755ccb1f27b4c582a6765');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `addr` varchar(250) NOT NULL,
  `cont_num` varchar(20) NOT NULL,
  `Company` varchar(255) NOT NULL,
  `company_logo` varchar(255) NOT NULL,
  `Business_permit` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `fname`, `lname`, `username`, `email`, `password`, `addr`, `cont_num`, `Company`, `company_logo`, `Business_permit`, `status`) VALUES
(113, 'Nel John', 'Bayalas', 'neljohn18', 'neljohnbayalas@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tagunol Cogon Pardo Cebu City', '0909090909', 'Ainels', 'http://192.168.1.11/aquae3/uploaded_files/wolf.jpg', 'bottled.jpg,business.jpg,container.jpg', 'Deactivated'),
(114, 'Mitch', 'Alforque', 'mitchy', 'mitch@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Inayawan Cogon Pardo Cebu City', '090900992', 'Mitchy', 'http://192.168.1.11/aquae3/uploaded_files/wolf.jpg', 'image2.jpg,image2.png,image3.jpg', 'Active'),
(115, 'Airah Pearl', 'Bayalas', 'airah18', 'airah@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Maribago, Lapu-lapu City', '09507705768', 'Ainels', 'http://192.168.1.11/aquae3/uploaded_files/wolf.jpg', 'image3.png,image4.jpg,image4.png', 'Deactivated'),
(116, 'JohnFlor', 'Lodonia', 'johnflor', 'johnflor@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tisa Labangon, Cebu City', '09090909098', 'QCVForevs', 'http://192.168.1.11/aquae3/uploaded_files/wolf.jpg', 'back.jpg,bg.jpg,bottled.jpg', 'Deactivated'),
(117, 'Nel John', 'Bayalas', 'nels123', 'neljohn@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Lapu lapu', '0909090909', 'neljohn@gmail.com', 'wolf.jpg', 'business.jpg,container.jpg,containers.jpg', 'Deactivated'),
(118, 'Sebastyan Wolfgang', 'Bayalas', 'wolfgang', 'wolfgang@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tagunol Cogon Pardo Cebu City', '092139012', 'WOLFGANG', 'container.jpg', 'business.jpg,containers.jpg', 'Deactivated'),
(119, 'floyd', 'alvarez', 'floydalvarez', 'floyd@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'balagtas', '0909090909', 'floyds', 'container.jpg', 'business.jpg,container.jpg,containers.jpg', 'Deactivated'),
(120, 'Julius Jay', 'Buenavista', 'jullius18', 'julius18@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Lapu lapu', '09096635919', 'Julius', 'wolf.jpg', 'bottled.jpg,business.jpg,container.jpg', 'Deactivated'),
(121, 'Nel John', 'asdas', 'asd', 'asds@asf', '202cb962ac59075b964b07152d234b70', 'asd', 'asd', 'asd', 'featured-app12.png', 'gallon.jpg,header.png', 'Deactivated'),
(122, 'asdasda', 'arata', 'awsdds', 'asd@asgag', '202cb962ac59075b964b07152d234b70', 'asd', 'asd', 'ads', 'gallon.jpg', 'bottled.jpg,business.jpg', 'Deactivated'),
(123, 'szhxj', 'asd', 'qwsdf', 'asd@esfd', '202cb962ac59075b964b07152d234b70', 'sfgg', 's', 'asd', 'gallon.jpg', 'business.jpg,container.jpg', 'Deactivated'),
(124, 'asdsdhfgff', 'fdghf', 'sdfg', 'asdffg@rdsg', '202cb962ac59075b964b07152d234b70', 'sdaf', 'dsfg', 'asd', 'container.jpg', 'gallon.jpg,header.png', 'Deactivated'),
(125, 'asdgjd', 'dsfdgffg', 'fsdgdf', 'asdfs@asdsafwrr', '202cb962ac59075b964b07152d234b70', 'rer', 'wer', 'w', 'bottled.jpg', 'gallon.jpg,header.png', 'Deactivated'),
(126, 'asdsadasdsa', 'asdsada', 'asdas', 'asd@asdgad', '202cb962ac59075b964b07152d234b70', 'dasd', 'asd', 'asd', 'business.jpg', 'featured-app12.png,gallon.jpg', 'Deactivated'),
(127, 'asdsadas', 'asdasds', 'asdsa', 'asd@asda34', '202cb962ac59075b964b07152d234b70', 'asd', 'asd', 'asd', 'container.jpg', 'business.jpg,container.jpg', 'Deactivated'),
(128, 'asdasda', 'asdasd', 'asdasdas', 'asd@asdas', '7815696ecbf1c96e6894b779456d330e', 'asdas', 'asd', 'asd', 'container.jpg', 'bottled.jpg,business.jpg,container.jpg', 'Deactivated'),
(129, 'dsaasdasdasd', 'asdasd', 'asdasd', 'asdasdas@fsfds', '202cb962ac59075b964b07152d234b70', 'asd', 'asd', 'asdass', 'wolf.jpg', 'bottled.jpg,business.jpg,container.jpg', 'Deactivated'),
(130, 'john patrick', 'echavez', 'patrick', 'echavez@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'basak', '09090909', 'Echav', 'Diagram1.jpeg', 'Diagram1.jpeg', 'Active'),
(131, 'Michael', 'Kong', 'michael', 'michael@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Private', '09090909', 'KONG', '64666e9958147.560ddaa86324b.jpg', '1508946327351_okea193_eva_table_water_75_cl_pack_of_12.jpg', 'Deactivated');

-- --------------------------------------------------------

--
-- Table structure for table `consumers`
--

CREATE TABLE `consumers` (
  `cons_id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `cont_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consumers`
--

INSERT INTO `consumers` (`cons_id`, `fname`, `lname`, `username`, `password`, `email`, `addr`, `cont_num`) VALUES
(3, 'Julius Jay', 'Buenavista', 'julius12', 'password', 'jaybuenavista145@gmail.com', 'Amoa', 2147483647),
(4, 'nel john', 'bayalas', 'neljohn18', 'bayalas123', 'neljohn@gmail.com', 'tagunol', 2147483647),
(5, 'wrgerwge', 'dfdf', 'edgfergt', 'efgdfg', 'FRGEDGFE', 'wdfeg', 3243242),
(6, 'jh', 'uh', 'dsfgergterg', 'efgefgegf', 'SDFWDF', 'dfogegf', 321424);

-- --------------------------------------------------------

--
-- Table structure for table `for_pick_up`
--

CREATE TABLE `for_pick_up` (
  `pick_id` int(255) NOT NULL,
  `order_id` int(255) NOT NULL,
  `prod_id` int(255) NOT NULL,
  `cons_id` int(255) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `total` int(255) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(255) NOT NULL,
  `prod_id` int(255) NOT NULL,
  `client_id` int(255) NOT NULL,
  `prod_type` varchar(250) NOT NULL,
  `water_type` varchar(250) NOT NULL,
  `service_type` varchar(255) NOT NULL,
  `mode_of_claiming` varchar(255) NOT NULL,
  `quantity` int(250) NOT NULL,
  `price` int(250) NOT NULL,
  `total` int(250) NOT NULL,
  `address` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `prod_id`, `client_id`, `prod_type`, `water_type`, `service_type`, `mode_of_claiming`, `quantity`, `price`, `total`, `address`, `status`) VALUES
(25, 2, 3, 'Bottle Size', 'Distilled', 'Refill', 'Deliver', 8, 0, 120, '', '1'),
(26, 3, 3, 'Container Jug Size', 'Distilled', 'Refill', 'Pick up', 2, 0, 120, '', '2'),
(27, 2, 3, 'Bottle Size', 'Distilled', 'Purchase', 'Pick up', 1, 0, 120, '', '1'),
(28, 11, 3, 'Bottle Size', 'Distilled', 'Refill', 'Deliver', 3, 0, 120, '', '1'),
(29, 54, 6, 'Round Container Size', 'Purified', 'Refill', 'COD', 15, 16, 205, 'Tagunol', '1'),
(30, 54, 6, 'Bottle size', 'Purified', 'Refill', 'Deliver', 25, 234, 234, 'tagunol', '1'),
(31, 54, 6, 'Gallon Size', 'Mineral', 'Refill', 'Deliver', 12, 12, 12, 'Carbon', '1');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `order_details_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`order_details_id`, `order_id`, `prod_id`, `quantity`, `total`, `created_at`) VALUES
(1, 25, 113, 55, 100, '2019-02-04');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `prod_pic` varchar(255) NOT NULL,
  `prod_type` varchar(255) NOT NULL,
  `water_type` varchar(255) NOT NULL,
  `prod_price` int(255) NOT NULL,
  `express_price` int(255) NOT NULL,
  `delivery_price` int(255) NOT NULL,
  `same_day` time(6) NOT NULL,
  `mop` varchar(255) NOT NULL,
  `no_of_filter` int(11) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `id`, `prod_pic`, `prod_type`, `water_type`, `prod_price`, `express_price`, `delivery_price`, `same_day`, `mop`, `no_of_filter`, `address`) VALUES
(53, 114, 'aquae4/uploaded_files/bg.jpg', 'Bottled Size', 'Alkaline,Distilled', 12, 12, 12, '05:02:00.000000', 'Paypal,COD', 12, 'asd'),
(54, 113, 'aquae4/uploaded_files/bottled.jpg', 'Round Container Size', 'Alkaline,Distilled', 12, 1, 12, '06:06:00.000000', 'Paypal,COD', 12, 'Tagunol'),
(55, 113, 'aquae4/uploaded_files/container.jpg', 'Bottled Size', 'Alkaline,Distilled', 12, 1, 12, '00:22:00.000000', 'Paypal', 12, 'Tagunol');

-- --------------------------------------------------------

--
-- Table structure for table `produc_details`
--

CREATE TABLE `produc_details` (
  `id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produc_details`
--

INSERT INTO `produc_details` (`id`, `prod_id`, `client_id`, `quantity`, `created_at`) VALUES
(1, 1, 62, 2000, '2019-01-01'),
(2, 2, 44, 3351, '2019-02-02'),
(14, 2, 43, 424, '2019-03-06'),
(15, 21, 88, 3123, '2019-02-11'),
(16, 22, 113, 11, '2019-02-12'),
(17, 21, 88, 112, '2019-03-07'),
(18, 21, 88, 1234, '2019-04-02'),
(19, 21, 88, 5156, '2019-05-08'),
(20, 21, 88, 1567, '2019-06-08'),
(21, 21, 88, 3133, '2019-07-02'),
(22, 21, 113, 1231, '2019-08-08'),
(23, 41, 80, 3216, '2019-03-20'),
(24, 22, 113, 1235, '2019-04-16'),
(25, 21, 80, 1555, '2019-05-01'),
(26, 21, 80, 6575, '2019-06-07'),
(27, 22, 113, 16, '2019-02-08'),
(28, 23, 113, 15, '2019-03-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accepted_orders`
--
ALTER TABLE `accepted_orders`
  ADD PRIMARY KEY (`accept_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consumers`
--
ALTER TABLE `consumers`
  ADD PRIMARY KEY (`cons_id`);

--
-- Indexes for table `for_pick_up`
--
ALTER TABLE `for_pick_up`
  ADD PRIMARY KEY (`pick_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_details_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `produc_details`
--
ALTER TABLE `produc_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prod_id` (`prod_id`,`client_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accepted_orders`
--
ALTER TABLE `accepted_orders`
  MODIFY `accept_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `consumers`
--
ALTER TABLE `consumers`
  MODIFY `cons_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `for_pick_up`
--
ALTER TABLE `for_pick_up`
  MODIFY `pick_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `produc_details`
--
ALTER TABLE `produc_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
